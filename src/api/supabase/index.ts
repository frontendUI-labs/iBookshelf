import { createClient } from "@supabase/supabase-js";

const index = createClient(
  "https://oytjtiafvlwbvupijhqy.supabase.co",
  import.meta.env["VITE_APP_SUPABASE_KEY"] as string
  // process.env.VITE_APP_SUPABASE_KEY
);

export default index;
