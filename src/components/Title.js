import React from 'react';
import './css/tamagotchi.css';
import ErrorBoundary from './ErrorBoundary';

class Title extends React.Component {
  render() {
    return (
      <header className="title">
        <h1 className="title__name">GitHub Tamagotchi</h1>
        <p className="title__instructions">
          Keep my motivation levels up by sending me emojis!
        </p>
      </header>
    );
  }
}

export default ErrorBoundary(Title);
