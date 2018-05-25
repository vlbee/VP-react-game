import React from 'react';
import './css/form.css';

const Form = ({ handleChange, handleSubmit, input }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Enter your <br /> Github username:
      </label>
      <br />
      <input
        type="text"
        id="username"
        value={input}
        onChange={handleChange}
        autoComplete="off"
      >
        {/* <span className="blinking_cursor">|</span> */}
      </input>
    </form>
  );
};

export default Form;
