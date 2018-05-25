import React from 'react';
import Form from './Form';
import Game from './Game';
import { getUserData } from '../utils/getUserData';
import './css/screen.css';
import ErrorBoundary from './ErrorBoundary';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      name: '',
      avatar_url: '',
      motimeter: props.motimeter
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
        avatar_url: userData.avatar_url
      })
    );
  };

  render() {
    if (!this.state.name || !this.state.avatar_url) {
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
      return (
        <div className="screen">
          <Game
            name={this.state.name}
            avatar_url={this.state.avatar_url}
            motimeter={this.state.motimeter}
          />
        </div>
      );
    }
  }
}

export default ErrorBoundary(Screen);
