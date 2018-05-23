import React from 'react';
import Screen from './Screen';
import ButtonList from './ButtonList';

export default class Tamagotchi extends React.Component {
  render() {
    return (
      <section className="tamagotchi">
        <Screen />
        <ButtonList />
      </section>
    );
  }
}
