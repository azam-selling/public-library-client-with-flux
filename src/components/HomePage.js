import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import { toast } from "react-toastify";
import { loadBooks, deleteBook } from "../actions/bookActions";
import bookStore from "../stores/bookStore";

function HomePage() {
  const [books, setBooks] = useState(bookStore.getBooks());
  const [booksFiltered, setBooksFiltered] = useState(bookStore.getBooks());

  useEffect(() => {
    bookStore.addChangeListener(onChange);

    if (books.length === 0) {
      loadBooks();
    }

    return () => bookStore.removeChangeListener(onChange);
  }, [books.length]);

  function onChange() {
    setBooks(bookStore.getBooks());
    setBooksFiltered(bookStore.getBooks());
  }

  function handleDelete(event) {
    deleteBook(event.target.id).then(() => {
      toast.success("Book deleted.");
    });
  }

  function handleSearch(event) {
    const bookMatches = books.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setBooksFiltered(bookMatches);
  }

  return (
    <>
      <div className="App-text">
        <h3>Available Books</h3>
        <div>
          <label style={{ fontSize: 20, fontWeight: "bold" }}>Search:</label>
          <input
            style={{ minWidth: "400px", marginLeft: "15px" }}
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="search by book title"
            onChange={handleSearch}
          />
        </div>
      </div>
      <BookList books={booksFiltered} onClick={handleDelete} />
    </>
  );
}

export default HomePage;
