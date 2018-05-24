import React from 'react';
import Title from './Title';
import Tamagotchi from './Tamagotchi';
import './css/app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title />
        <Tamagotchi />
      </div>
    );
  }
}
