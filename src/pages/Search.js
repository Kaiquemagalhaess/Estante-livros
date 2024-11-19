import React, { useState } from "react";
import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard";
import { getBooks } from "../services/api";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { updateBookShelf } = useBooks();

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setResults([]);
      return;
    }
    const books = await getBooks(e.target.value);
    setResults(books);
  };

  return (
    <div>
      <h1>Buscar Livros</h1>
      <input
        type="text"
        placeholder="Digite para buscar livros..."
        value={query}
        onChange={handleSearch}
      />
      <div>
        {results.map((book) => (
          <BookCard key={book.id} book={book} onChangeShelf={updateBookShelf} />
        ))}
      </div>
    </div>
  );
};

export default Search;
