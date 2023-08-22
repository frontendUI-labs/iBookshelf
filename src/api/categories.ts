import supabaseClient from "./base.ts";

export const getBooksCategories = async () => {
  const { data, error } = await supabaseClient.from("categories").select("*");
  if (error) throw new Error(error.message);
  return data;
};
