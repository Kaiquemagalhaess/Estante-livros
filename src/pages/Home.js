import React from "react";
import { useBooks } from "../context/BooksContext";
import Shelf from "../components/Shelf";

const Home = () => {
  const { shelves } = useBooks();

  return (
    <div>
      <h1>Estante de Livros</h1>
      <Shelf
        title="Estou lendo"
        books={shelves.currentlyReading}
        shelf="currentlyReading"
      />
      <Shelf title="Quero ler" books={shelves.wantToRead} shelf="wantToRead" />
      <Shelf title="Já lido" books={shelves.read} shelf="read" />
    </div>
  );
};

export default Home;
