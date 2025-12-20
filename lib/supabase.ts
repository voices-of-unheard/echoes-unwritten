import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL=https://hnvtszvzipiavwoqvxgo.supabase.co;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudnRzenZ6aXBpYXZ3b3F2eGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNzI2NTksImV4cCI6MjA4MTc0ODY1OX0.SlrDpNujc0r1yZEc205LFkNcbHJb-VzNug5LWxGOFS0;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
