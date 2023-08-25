import supabaseClient from "./base";

export type PageRange = [number, number];

export const getBooks = async (
  pageRange: PageRange,
  filter: {
    rating: number;
  }
) => {
  const [startRange, endRange] = pageRange;
  const response = await supabaseClient
    .from("books")
    .select(
      `
      *,
      categories (name, slug) 
      `
    )
    // .select("*")
    .filter("rating", "gte", filter.rating)
    .range(startRange, endRange);

  return response;
};

export const getRecommendedBooks = async () => {
  const { data, error } = await supabaseClient
    .from("books")
    .select("*")
    .eq("isRecommended", true);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getBooksOnDiscount = async () => {
  const response = await supabaseClient
    .from("books")
    .select("*")
    .gt("discountPercentage", 0);
  if (response.error) {
    throw new Error(response.error.message);
  }

  return response;
};

export const getBooksRating = async (rating: number) => {
  // const [startRange, endRange] = pageRange;
  const response = await supabaseClient
    .from("books")
    .select("*")
    .gte("rating", rating)
    .range(0, 30);

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response;
};
