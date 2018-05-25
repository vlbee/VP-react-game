import React from 'react';
import Title from './Title';
import Tamagotchi from './Tamagotchi';
import './css/app.css';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title />
        <Tamagotchi />
      </div>
    );
  }
}

export default ErrorBoundary(App);
