import supabaseClient from "./base";

export type PageRange = [number, number];

export const getBooks = async (pageRange: PageRange) => {
  const [startRange, endRange] = pageRange;
  const response = await supabaseClient
    .from("books")
    .select("*")
    .range(startRange, endRange);

  return response;
};

export const getBooksListLayout = async (pageRangeList: PageRange) => {
  const [startRange, endRange] = pageRangeList;
  const response = await supabaseClient
    .from("books")
    .select("*")
    .range(startRange, endRange);

  return response;
};

export const getBooksCategories = async () => {
  const response = await supabaseClient.from("categories").select("*");

  return response;
};
