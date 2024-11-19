import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BooksProvider } from "./context/BooksContext";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./App.css";

const App = () => {
  return (
    <BooksProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/search">Search</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
};

export default App;
