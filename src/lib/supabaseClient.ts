import { createClient } from '@supabase/supabase-js/dist/module/index';

const SUPABASE_URL = "https://auwhqsqaqpzppvyfoils.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1d2hxc3FhcXB6cHB2eWZvaWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NTc2NDQsImV4cCI6MjA1ODUzMzY0NH0.rz1L1GGkwIlXxrqf79ACMPfmOPvNqimj0ye3LZ7k0fY"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);