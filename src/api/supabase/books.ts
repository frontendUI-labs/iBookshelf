import supabase from "./index.ts";

export const getAllBooks = async () => {
  const response = await supabase.from("Books").select();
  return response;
};
