import { createClient } from "@supabase/supabase-js";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      books: {
        Row: {
          author: string;
          categories: {
            name: string;
            slug: string;
          };
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
        Insert: {
          author?: string | null;
          categorySlug: string;
          cover?: string | null;
          discountPercentage?: number;
          id?: string;
          isbn: string;
          isFavorite?: boolean;
          isFeatured?: boolean | null;
          isPopular?: boolean;
          isReaderChoice?: boolean;
          isRecommended?: boolean;
          language?: string | null;
          pages?: number | null;
          price?: number | null;
          publishDate?: string | null;
          publisher?: string | null;
          rating?: number | null;
          slug: string;
          synopsis?: string | null;
          title?: string | null;
          totalReviews?: number | null;
        };
        Update: {
          author?: string | null;
          categorySlug?: string;
          cover?: string | null;
          discountPercentage?: number;
          id?: string;
          isbn?: string;
          isFavorite?: boolean;
          isFeatured?: boolean | null;
          isPopular?: boolean;
          isReaderChoice?: boolean;
          isRecommended?: boolean;
          language?: string | null;
          pages?: number | null;
          price?: number | null;
          publishDate?: string | null;
          publisher?: string | null;
          rating?: number | null;
          slug?: string;
          synopsis?: string | null;
          title?: string | null;
          totalReviews?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "books_categorySlug_fkey";
            columns: ["categorySlug"];
            referencedRelation: "categories";
            referencedColumns: ["slug"];
          },
        ];
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
        };
        Insert: {
          id?: string;
          name?: string;
          slug: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
          avatar: string | null;
          bookId: string | null;
          comment: string | null;
          id: string;
          stars: number | null;
          username: string | null;
        };
        Insert: {
          avatar?: string | null;
          bookId?: string | null;
          comment?: string | null;
          id?: string;
          stars?: number | null;
          username?: string | null;
        };
        Update: {
          avatar?: string | null;
          bookId?: string | null;
          comment?: string | null;
          id?: string;
          stars?: number | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "reviews_bookId_fkey";
            columns: ["bookId"];
            referencedRelation: "books";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

const supabaseClient = createClient<Database>(
  "https://oytjtiafvlwbvupijhqy.supabase.co",
  import.meta.env["VITE_APP_SUPABASE_KEY"] as string
);

export default supabaseClient;
