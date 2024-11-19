import React, { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });

  const updateBookShelf = (book, newShelf) => {
    setShelves((prevShelves) => {
      const updatedShelves = { ...prevShelves };
      Object.keys(updatedShelves).forEach((shelf) => {
        updatedShelves[shelf] = updatedShelves[shelf].filter(
          (b) => b.id !== book.id
        );
      });
      if (newShelf !== "none") {
        updatedShelves[newShelf].push(book);
      }
      return updatedShelves;
    });
  };

  return (
    <BooksContext.Provider
      value={{ books, setBooks, shelves, updateBookShelf }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
