import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  let dynamicClassName = "form-group";
  if (props.error.length > 0) {
    dynamicClassName += " has-error";
  }
  return (
    <div className={dynamicClassName}>
      <label>{props.label}</label>
      <div>
        <input
          typ="text"
          className="form-control"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
        />
      </div>
      {props.error && <div className="alret alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
