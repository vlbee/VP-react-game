import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      username: '',
      avatar: ''
    };
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ input: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = [];
    // TODO Fetch Api call method
    // getUserData();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter your Github username:</label>
        <input
          type="text"
          id="username"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
