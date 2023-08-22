import supabaseClient from "./base";
import { getBooksCategories } from "./categories.ts";

export type PageRange = [number, number];

export const getBooks = async (
  pageRange: PageRange,
  categoriesFilter: string[]
) => {
  const data = await getBooksCategories();
  const [startRange, endRange] = pageRange;
  const response = await supabaseClient
    .from("books")
    .select("*")
    .range(startRange, endRange)
    .in(
      "categorySlug",
      categoriesFilter.length > 0
        ? categoriesFilter
        : data.map((category) => category.slug)
    );

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
