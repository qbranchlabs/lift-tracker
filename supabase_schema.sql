-- Run in Supabase SQL Editor. Adjust if objects already exist.

-- Per-exercise notes for an in-progress or completed workout session (keyed by exercise_order as text)
ALTER TABLE workout_sessions
  ADD COLUMN IF NOT EXISTS exercise_notes jsonb NOT NULL DEFAULT '{}'::jsonb;

-- Rest-day wellness activities (one row per user per program_day per activity_type)
CREATE TABLE IF NOT EXISTS rest_day_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  program_day int NOT NULL CHECK (program_day >= 1 AND program_day <= 91),
  activity_type text NOT NULL CHECK (activity_type IN ('sauna', 'walking', 'biking', 'sun')),
  minutes int NOT NULL CHECK (minutes >= 0),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, program_day, activity_type)
);

CREATE INDEX IF NOT EXISTS idx_rest_day_activities_user_day
  ON rest_day_activities (user_id, program_day);

ALTER TABLE rest_day_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own rest_day_activities"
  ON rest_day_activities FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ── exercise_logs: remove duplicates, then unique index ───────────────────
-- Run in Supabase SQL Editor (postgres role). Order: preview → delete → index.
-- Keeps one row per (session_id, exercise_order, set_number): lowest id wins.

-- Step 1 — Preview duplicate groups (optional)
SELECT session_id, exercise_order, set_number, COUNT(*) AS row_count, ARRAY_AGG(id ORDER BY id) AS ids
FROM exercise_logs
GROUP BY session_id, exercise_order, set_number
HAVING COUNT(*) > 1
ORDER BY row_count DESC, session_id;

-- Step 2 — Delete duplicate rows (extras only)
DELETE FROM exercise_logs
WHERE id IN (
  SELECT id
  FROM (
    SELECT id,
           ROW_NUMBER() OVER (
             PARTITION BY session_id, exercise_order, set_number
             ORDER BY id
           ) AS rn
    FROM exercise_logs
  ) ranked
  WHERE rn > 1
);

-- Step 3 — Prevent future duplicates (idempotent)
CREATE UNIQUE INDEX IF NOT EXISTS exercise_logs_session_exercise_set_uniq
  ON exercise_logs (session_id, exercise_order, set_number);

-- ═══════════════════════════════════════════════════════════════════════════
-- VERIFICATION — Run anytime in SQL Editor (read-only checks; safe to re-run)
-- Expect: index_present = 1, duplicate_groups = 0, notes_column_present = true,
--         rest_table_present = true
-- ═══════════════════════════════════════════════════════════════════════════

SELECT
  (SELECT COUNT(*)::int
   FROM pg_indexes
   WHERE schemaname = 'public'
     AND tablename = 'exercise_logs'
     AND indexname = 'exercise_logs_session_exercise_set_uniq') AS index_present,
  (SELECT COUNT(*)::int
   FROM (
     SELECT 1
     FROM exercise_logs
     GROUP BY session_id, exercise_order, set_number
     HAVING COUNT(*) > 1
   ) d) AS duplicate_groups,
  (SELECT COUNT(*)::int
   FROM information_schema.columns
   WHERE table_schema = 'public'
     AND table_name = 'workout_sessions'
     AND column_name = 'exercise_notes') AS notes_column_present,
  (SELECT COUNT(*)::int
   FROM information_schema.tables
   WHERE table_schema = 'public'
     AND table_name = 'rest_day_activities') AS rest_table_present;

-- Detail: index definition (optional)
-- SELECT indexname, indexdef
-- FROM pg_indexes
-- WHERE schemaname = 'public' AND tablename = 'exercise_logs' AND indexname = 'exercise_logs_session_exercise_set_uniq';

-- Detail: list duplicate groups if duplicate_groups > 0 (should return no rows)
-- SELECT session_id, exercise_order, set_number, COUNT(*) AS n
-- FROM exercise_logs
-- GROUP BY session_id, exercise_order, set_number
-- HAVING COUNT(*) > 1;

-- ── Workout substitution (Today uses another plan day’s template until PST midnight) ──
ALTER TABLE user_program_state
  ADD COLUMN IF NOT EXISTS workout_substitute_program_day int,
  ADD COLUMN IF NOT EXISTS workout_substitute_for_ymd text;

-- After a substitute session completes: calendar for program_day >= base shifts to start at tail_start_ymd (N still owed).
ALTER TABLE user_program_state
  ADD COLUMN IF NOT EXISTS schedule_tail_base_program_day int,
  ADD COLUMN IF NOT EXISTS schedule_tail_start_ymd text;

ALTER TABLE workout_sessions
  ADD COLUMN IF NOT EXISTS substitute_source_program_day int;
