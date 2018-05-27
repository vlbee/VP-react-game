import React from 'react';
// import './form.css';

const Form = ({ handleChange, handleSubmit, input }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Enter your Github username:</label>
      <br />
      <input
        type="text"
        id="username"
        value={input}
        onChange={handleChange}
        autoComplete="off"
        data-testid="form"
      />
    </form>
  );
};

export default Form;
