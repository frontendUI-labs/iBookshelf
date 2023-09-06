import supabaseClient from "./base";

export type PageRange = [number, number];

export const getBooks = async (
  pageRange: PageRange,
  orderBooks: boolean,
  filter: {
    rating: number;
    category: string;
    initialRange: number;
    finalRange: number;
    inputValue: string;
  }
) => {
  console.log(filter.inputValue, "aca");
  const [startRange, endRange] = pageRange;
  const response = await supabaseClient
    .from("books")
    .select(
      `
      *,
      categories (name, slug) 
      `
    )
    .filter("rating", "gte", filter.rating)
    .filter("categorySlug", filter.category ? "eq" : "not.eq", filter.category)
    .filter("price", "gte", filter.initialRange)
    .filter("price", "lte", filter.finalRange)
    .textSearch("title", filter.inputValue, {
      type: "websearch",
    })
    // .filter("title", "textsearch", filter.inputValue)
    // .filter("title", "textSearch", "rich")
    .range(startRange, endRange)
    .order("rating", { ascending: orderBooks });

  return response;
};

export const getBookDetails = async (bookSlug: string) => {
  const response = await supabaseClient
    .from("books")
    .select("*")
    .eq("slug", bookSlug);
  if (response.error) {
    throw new Error(response.error.message);
  }

  return response;
};

export const getRelatedBooks = async (
  bookCategory: string,
  bookSlug: string
) => {
  const response = await supabaseClient
    .from("books")
    .select("*")
    .filter("categorySlug", "eq", bookCategory)
    .filter("slug", "not.eq", bookSlug)
    .range(0, 2);

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

export const getBooksPrice = async () => {
  // const [startRange, endRange] = pageRange;
  const response = await supabaseClient.from("books").select("price");

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response;
};

export const getPopularBooks = async () => {
  const { data, error } = await supabaseClient
    .from("books")
    .select("*")
    .eq("isPopular", true);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getBooksFlashDiscount = async () => {
  const response = await supabaseClient
    .from("books")
    .select("*")
    .gte("discountPercentage", 0.5);
  if (response.error) {
    throw new Error(response.error.message);
  }
  return response;
};

export const getBooksFeature = async () => {
  const response = await supabaseClient
    .from("books")
    .select("*")
    .eq("isFeatured", true);
  if (response.error) {
    throw new Error(response.error.message);
  }
  return response;
};
