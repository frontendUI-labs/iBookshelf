import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "https://oytjtiafvlwbvupijhqy.supabase.co",
  import.meta.env["VITE_APP_SUPABASE_KEY"] as string
);

export default supabaseClient;
