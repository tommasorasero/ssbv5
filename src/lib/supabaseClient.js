import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://pvoxomffaiedvusgyavy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2b3hvbWZmYWllZHZ1c2d5YXZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3OTMwMzcsImV4cCI6MjA0MTM2OTAzN30.8Atn4ETyBdLH1DZhBzxAZvwDZpE2u4ZQJown-49lgAc"
);
