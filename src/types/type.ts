export type Book = {
  author: string;
  categorySlug: string;
  cover: string;
  discountPercentage: number;
  id: string;
  isbn: string;
  isFavorite: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  isReaderChoice: boolean;
  isRecommended: boolean;
  language: string;
  pages: number;
  price: number;
  publishDate: string;
  publisher: string;
  rating: number;
  slug: string;
  synopsis: string;
  title: string;
  totalReviews: number;
};

export type Genre = {
  id: string;
  name: string;
  slug: string;
};
