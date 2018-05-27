import React from 'react';
import Tamagotchi from './tamagotchi/Tamagotchi';
import './app.css';

const text = `{ 💜: 'compliment my code', 🐶: 'send me an emoji', ⭐: 'star one of my repos' }`;

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1 className="header__title">GitHub Tamagotchi</h1>
          <p className="header__instructions">
            Keep my motivation levels up by sending me emojis!
          </p>
          <p>
            const <strong>legend</strong> = {text}
          </p>
        </header>
        <Tamagotchi />
      </div>
    );
  }
}
