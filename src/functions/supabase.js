import { createClient } from "@supabase/supabase-js";

const URL = "https://kdbvccyyovhbhehxorlv.supabase.co";

export const getSupabase = () => {
  const supabase = createClient(URL, localStorage.getItem("key"));
  return supabase;
};
