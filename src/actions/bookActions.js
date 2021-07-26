import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import * as BookService from "../Services/BookService";

export function saveBook(book) {
  return BookService.SaveBook(book).then((savedBook) => {
    dispatcher.dispatch({
      actionType: book._id ? actionTypes.UPDATE_BOOK : actionTypes.ADD_BOOK,
      book: savedBook,
    });
  });
}

export function loadBooks() {
  return BookService.GetBooks().then((allBooks) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_BOOKS,
      books: allBooks,
    });
  });
}

export function deleteBook(bookId) {
  return BookService.DeleteBook(bookId).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_BOOK,
      bookId: bookId,
    });
  });
}
