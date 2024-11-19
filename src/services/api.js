import axios from "axios";

const api = axios.create({
  baseURL: "https://api-books-dot-api-samples-423102.uc.r.appspot.com",
});

export const getBooks = async (query) => {
  const response = await api.get(`/books?query=${query}`);
  return response.data;
};
