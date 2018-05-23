import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <header className="title">
        <h1 className="title__name">GitHub Tamagotchi!</h1>
        <p className="title__instructions">
          Keep my motivation levels up by sending me emojis!
        </p>
      </header>
    );
  }
}
