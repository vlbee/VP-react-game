import React from 'react';
import Form from './form/Form';
import Game from './game/Game';
import ButtonList from './buttons/ButtonList';
import { getUserData } from '../../utils/getUserData';
import ErrorBoundary from '../ErrorBoundary';
import './tamagotchi.css';

class Tamagotchi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      name: '',
      avatar_url: '',
      motimeter: ['💜', '💜', '💜', '💜', '💜', '💜', '💜']
    };
  }

  /* FORM INPUT FIELD */
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

  /* EMOJI BUTTONS */
  handleClick = event => {
    event.preventDefault();
    const remotivation = new Array(parseInt(event.target.value)).fill('💜');

    this.setState(prevState => {
      const newMotimeter = [...prevState.motimeter, ...remotivation].slice(
        0,
        7
      );
      return { motimeter: newMotimeter };
    });
  };

  /* DEMOTIVATION COUNTDOWN */
  startDemotivation = () => {
    const motimeter = this.state.motimeter;
    console.log(motimeter);
    this.timer = setInterval(
      () =>
        this.setState(prevState => {
          const newMotimeter = [...prevState.motimeter];
          newMotimeter.pop();
          return { motimeter: newMotimeter };
        }),
      2000
    );
    if (motimeter.length === 0) {
      clearInterval(this.timer);
    }
  };

  render() {
    const motimeter = this.state.motimeter;
    const level = motimeter.length;
    const player = this.state.name || this.state.input;

    return (
      <main className="tamagotchi">
        <section className="screen">
          <h2>Screen</h2>
          {!this.state.name || !this.state.avatar_url ? (
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              input={this.state.input}
            />
          ) : (
            <Game
              name={this.state.name}
              avatar_url={this.state.avatar_url}
              motimeter={motimeter}
              level={level}
              startDemotivation={this.startDemotivation}
            />
          )}
        </section>
        <ButtonList handleClick={this.handleClick} />
      </main>
    );
  }
}

export default ErrorBoundary(Tamagotchi);
