import React from "react";
import Books from "../UpcommingBooks.json";

function UpcomingBooks() {
  let date = new Date();
  let index = 1;
  return (
    <>
      <div className="Applocal">
        <h4>Upcoming books</h4>
        <p>
          Books listed below will be available in our library on or before
          expected date.
        </p>
      </div>
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Author</th>
              <th>Expected date</th>
            </tr>
          </thead>
          <tbody>
            {Books.map((book) => {
              date.setDate(date.getDate() + index * 7);
              return (
                <tr key={++index}>
                  <td>{book.title}</td>
                  <td>{book.genre}</td>
                  <td>{book.author}</td>
                  <td>{date.toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UpcomingBooks;
