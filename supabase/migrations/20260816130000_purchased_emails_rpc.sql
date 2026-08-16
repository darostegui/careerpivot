CREATE OR REPLACE FUNCTION get_purchased_emails()
RETURNS TABLE (email TEXT)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT DISTINCT au.email
  FROM auth.users au
  JOIN public.purchases p ON au.id = p.user_id
  WHERE p.status = 'paid';
$$;
