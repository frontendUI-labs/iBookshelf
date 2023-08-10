import { createClient } from "@supabase/supabase-js";

const index = createClient(
  "https://oytjtiafvlwbvupijhqy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95dGp0aWFmdmx3YnZ1cGlqaHF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NDk1NDAsImV4cCI6MjAwNzEyNTU0MH0.l0pS1sPjcEQmG4Z1aKqqsQQbr1imIxusgKfDnesiB1M"
);

export default index;
