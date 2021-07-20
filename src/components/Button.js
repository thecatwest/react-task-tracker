import React from "react";
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    // can add event, like onClick function, and write funtion above return
    // but because components don't always have same click, can add as prop in Header.js
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

// default props
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
