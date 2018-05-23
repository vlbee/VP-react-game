import React from 'react';
import Form from './Form';
import { getUserData } from '../utils/getUserData';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      name: '',
      avatar: ''
    };
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ input: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    getUserData(this.state.input).then(userData =>
      this.setState({
        name: userData.name || userData.login,
        avatar: userData.avatar_url
      })
    );
  };
  render() {
    if (!this.state.name || !this.state.avatar) {
      return (
        <div className="screen">
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
          />
        </div>
      );
    } else {
      return <h1>{this.state.avatar}</h1>;
    }
  }
}
