import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, value, handleClick }) => {
  return (
    <button onClick={handleClick} value={value}>
      {type}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  handleClick: PropTypes.func
};

export default Button;
