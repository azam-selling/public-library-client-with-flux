import actionTypes from "../actions/actionTypes";
import dispatcher from "../appDispatcher";
import { EventEmitter } from "events";
const CHANGE_EVENT = "change";

let _books = [];

class BookStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getBooks() {
    return _books;
  }

  getBookById(bookId) {
    return _books.find((book) => book._id === bookId);
  }
}

const bookStore = new BookStore();

export default bookStore;

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.ADD_BOOK:
      _books.push(action.book);
      bookStore.emitChange();
      break;

    case actionTypes.LOAD_BOOKS:
      _books = action.books;
      bookStore.emitChange();
      break;

    case actionTypes.DELETE_BOOK:
      _books = _books.filter((book) => book._id !== action.bookId);
      bookStore.emitChange();
      break;

    case actionTypes.UPDATE_BOOK:
      _books = _books.map((book) =>
        book._id === action.book._id ? action.book : book
      );
      bookStore.emitChange();
      break;

    default:
    //Do nothing
  }
});
