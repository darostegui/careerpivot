ALTER TABLE public.newsletter_subscribers ADD COLUMN IF NOT EXISTS unsubscribed BOOLEAN DEFAULT false;
