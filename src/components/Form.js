import React from 'react';

const Form = ({ handleChange, handleSubmit, state }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Enter your Github username:</label>
      <input
        type="text"
        id="username"
        value={state.input}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
