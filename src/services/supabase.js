import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fomutyydhvvlvknthywd.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvbXV0eXlkaHZ2bHZrbnRoeXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MDA5MzMsImV4cCI6MjAzODI3NjkzM30.Y3b3XmeWia7o_eQcXDLb3kon8GkdkYL5LqLJC8_PyXs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
