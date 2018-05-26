import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../../ErrorBoundary';

const Button = ({ type, value, handleClick }) => {
  return (
    <li className="button">
      <button onClick={handleClick} value={value}>
        {type}
      </button>
    </li>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  handleClick: PropTypes.func
};

export default ErrorBoundary(Button);
