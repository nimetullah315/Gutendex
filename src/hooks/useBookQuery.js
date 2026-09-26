import { useQuery } from "@tanstack/react-query";
import {
  fetchBooksByURL,
  fetchBookDetails,
  fetchSearchedBooks,
  fetchBooksByCategory,
} from "../api/GutendexBooks";

export const useBooks = (url) => {
  return useQuery({
    queryKey: ["books", url],
    queryFn: () => fetchBooksByURL(url),
  });
};

export const useBookDetails = (id) => {
  return useQuery({
    queryKey: ["bookDetails", id],
    queryFn: () => fetchBookDetails(id),
    enabled: !!id,
  });
};

export const useSearchedBooks = (searchTerm) => {
  return useQuery({
    queryKey: ["searchBooks", searchTerm],
    queryFn: () => fetchSearchedBooks(searchTerm),
    enabled: !!searchTerm,
  });
};

export const useBookByCategory = (category) => {
  return useQuery({
    queryKey: ["booksByCategory", category],
    queryFn: () => fetchBooksByCategory(category),
    enabled: category !== "all",
  });
};
