import { handleResponse, handleError } from "../common/apiUtils";
//const url = "http://localhost:4002/Api/books/";
const url = process.env.REACT_APP_BOOK_API_URL;

export function GetBooks() {
  return fetch(url).then(handleResponse).catch(handleError);
}

export function SaveBook(book) {
  return fetch(url + (book._id || ""), {
    // method: book._id ? "PATCH" : "POST",
    method: book._id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...book,
      availableQty: parseInt(book.availableQty, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function GetBookByID(bookId) {
  return fetch(url + bookId)
    .then(handleResponse)
    .catch(handleError);
}

export function DeleteBook(bookId) {
  return fetch(url + bookId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
