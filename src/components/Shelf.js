import React from "react";
import BookCard from "./BookCard";

const Shelf = ({ title, books, shelf }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Shelf;
