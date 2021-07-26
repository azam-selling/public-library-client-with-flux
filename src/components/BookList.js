import React from "react";
import { Link } from "react-router-dom";

function BookList(props) {
  return (
    <div className="body">
      <table className="table">
        <thead className="App-th">
          {/* <tr className="App-th">
            <th className="App-th">Title</th>
            <th className="App-th">Genre</th>
            <th className="App-th">Author</th>
            <th className="App-th">Available</th>
            <th className="App-th"></th>
          </tr> */}
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Author</th>
            <th>Available</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) => {
            return (
              <tr key={book._id}>
                <td className="App-left-align">
                  <Link to={"/books/" + book._id}>{book.title}</Link>
                </td>
                <td className="App-left-align">{book.genre}</td>
                <td className="App-left-align">{book.author}</td>
                <td className="App-left-align">{book.availableQty}</td>
                <td>
                  <input
                    className="btn btn-danger"
                    type="button"
                    id={book._id}
                    value="Delete"
                    onClick={props.onClick}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
