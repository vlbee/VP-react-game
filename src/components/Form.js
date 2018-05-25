import React from 'react';
import './css/form.css';
import ErrorBoundary from './ErrorBoundary';

const Form = ({ handleChange, handleSubmit, state }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Enter your <br /> Github username:
      </label>
      <br />
      <input
        type="text"
        id="username"
        value={state.input}
        onChange={handleChange}
        autocomplete="off"
      >
        {/* <span className="blinking_cursor">|</span> */}
      </input>
    </form>
  );
};

export default ErrorBoundary(Form);
