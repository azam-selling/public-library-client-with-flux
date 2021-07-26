import React from "react";
import TextInput from "../common/TextInput";
function BookForm(props) {
  return (
    <form className="container" onSubmit={props.onSubmit}>
      <TextInput
        label="Title"
        id="title"
        name="title"
        onChange={props.onChange}
        value={props.book.title}
        error={props.errors.title}
        placeholder="Enter book title"
      />
      <TextInput
        label="Genre"
        id="genre"
        name="genre"
        onChange={props.onChange}
        value={props.book.genre}
        error={props.errors.genre}
        placeholder="Enter genre"
      />
      <TextInput
        label="Author"
        id="author"
        name="author"
        onChange={props.onChange}
        value={props.book.author}
        error={props.errors.author}
        placeholder="Enter book author"
      />
      <TextInput
        label="Available"
        id="availableQty"
        name="availableQty"
        onChange={props.onChange}
        value={props.book.availableQty}
        error={props.errors.availableQty}
        placeholder="Enter number of available books"
      />

      <input
        type="submit"
        value="Save"
        style={{ marginTop: 30 }}
        className="btn btn-primary"
      />
    </form>
  );
}

export default BookForm;
