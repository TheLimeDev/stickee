-- Terms agreement is auto-accepted: the app removed the opt-in flow, so every
-- user is marked as having agreed to the Terms of Service by default.

-- New signups automatically get terms_agreed = TRUE
ALTER TABLE public.users
  ALTER COLUMN terms_agreed SET DEFAULT TRUE;

-- Existing users are also marked as agreed
UPDATE public.users
  SET terms_agreed = TRUE,
      terms_agreed_at = COALESCE(terms_agreed_at, updated_at, created_at, now());