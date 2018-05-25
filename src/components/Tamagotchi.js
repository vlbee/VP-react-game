import React from 'react';
import Screen from './Screen';
import ButtonList from './ButtonList';
import './css/tamagotchi.css';
import ErrorBoundary from './ErrorBoundary';

class Tamagotchi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motimeter: ['💜', '💜', '💜', '💜', '💜', '💜', '💜']
    };
  }
  handleClick = event => {
    const remotivation = new Array(parseInt(event.target.value)).fill('💜');

    this.setState(prevState => {
      const newMotimeter = [...prevState.motimeter, ...remotivation];

      return { motimeter: newMotimeter };
    });
    console.log('MOTIMETER', this.state.motimeter);
  };
  render() {
    return (
      <main className="tamagotchi">
        <Screen motimeter={this.state.motimeter} />
        <ButtonList handleClick={this.handleClick} />
      </main>
    );
  }
}

export default ErrorBoundary(Tamagotchi);
