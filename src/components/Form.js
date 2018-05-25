import React from 'react';
import './css/form.css';
import ErrorBoundary from './ErrorBoundary';

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
      />
    </form>
  );
};

export default ErrorBoundary(Form);
