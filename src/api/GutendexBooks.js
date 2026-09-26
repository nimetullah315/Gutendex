import axios from "axios";

const API_URL = "https://gutendex.com/books";

export const fetchBooksByURL = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export const fetchBookDetails = async (id) => {
  const res = await axios.get(
    `${API_URL}/?ids=${id}`
  );

  return res.data.results[0];
};

export const fetchSearchedBooks = async (
  searchTerm
) => {
  const res = await axios.get(
    `${API_URL}/?search=${searchTerm}`
  );

  return res.data;
};

// /books?topic=kategori

export const fetchBooksByCategory = async (category) => {
  const res = await axios.get(`${API_URL}/?topic=${category}`);
  return res.data;
};
