import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";
import { saveBook, loadBooks } from "../actions/bookActions";
import bookStore from "../stores/bookStore";
import { toast } from "react-toastify";

function ManageBookPage(props) {
  const [errors, setErrors] = useState({});
  const [books, setBooks] = useState(bookStore.getBooks());
  const [book, setBook] = useState({
    title: "",
    genre: "",
    author: "",
    availableQty: "",
  });

  useEffect(() => {
    bookStore.addChangeListener(onChange);
    const bookId = props.match.params.bookId;
    if (books.length === 0) {
      loadBooks();
    } else if (bookId) {
      setBook(bookStore.getBookById(bookId));
    }

    return () => bookStore.removeChangeListener(onChange);
  }, [books.length, props.match.params.bookId]);

  function onChange() {
    setBooks(bookStore.getBooks());
  }

  function handleChange({ target }) {
    setBook({ ...book, [target.name]: target.value });
  }

  function isFormValid() {
    const _errors = {};
    if (!book.title) _errors.title = "Title is required";
    if (!book.genre) _errors.genre = "Genre is required";
    if (!book.author) _errors.author = "Author is required";
    if (!book.availableQty)
      _errors.availableQty = "Available Quantity is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
    saveBook(book).then(() => {
      props.history.push("/");
      toast.success("Book saved.");
    });
  }

  return (
    <>
      <div className="Applocal">
        <h4>Manage book</h4>
        <p>
          Here you can update details of existing books Or can add new book into
          library.
        </p>
      </div>
      <BookForm
        book={book}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
}

export default ManageBookPage;
