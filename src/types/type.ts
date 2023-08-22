export type Book = {
  author: string;
  cover: string;
  created_at: string;
  genreId: null;
  id: number;
  isFavorite: null;
  pages: null;
  price: number;
  publisher: null;
  rating: number;
  synopsis: null;
  title: string;
  year: null;
  totalReviews: number;
  isbn: string;
  slug: string;
};

export type Genre = {
  id: string;
  name: string;
  slug: string;
};
