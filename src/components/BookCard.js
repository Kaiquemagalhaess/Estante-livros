import React from "react";

const BookCard = ({ book, onChangeShelf }) => {
  const handleChange = (e) => {
    onChangeShelf(book, e.target.value);
  };

  return (
    <div>
      <img src={book.thumbnail} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author || "Autor desconhecido"}</p>
      <select value={book.shelf || "none"} onChange={handleChange}>
        <option value="none">Nenhum</option>
        <option value="currentlyReading">Estou lendo</option>
        <option value="wantToRead">Quero ler</option>
        <option value="read">Já lido</option>
      </select>
    </div>
  );
};

export default BookCard;
