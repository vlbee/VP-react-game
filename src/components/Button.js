import React from 'react';

const Button = ({ type, value }) => {
  return (
    <li className="button">
      <data value={value}>{type}</data>
    </li>
  );
};

export default Button;
