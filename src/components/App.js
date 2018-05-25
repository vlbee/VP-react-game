import React from 'react';
import Title from './Title';
import Tamagotchi from './Tamagotchi';
import Legend from './Legend';
import './css/app.css';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <div className="app">
      <Title />
      <Tamagotchi />
      <Legend />
    </div>
  );
};

export default ErrorBoundary(App);
