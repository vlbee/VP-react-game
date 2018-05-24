import React from 'react';
import Motivation from './Motivation';
// import propTypes from 'prop-types';

// Game.propTypes = {
//   name: propTypes.string,
//   avatar_url: propTypes.string,
//   motimeter: propTypes.array
// };

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motimeter: props.motimeter
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () =>
        this.setState(prevState => {
          const newMotimeter = [...prevState.motimeter];
          console.log(newMotimeter);
          newMotimeter.pop();
          return { motimeter: newMotimeter };
        }),
      2000
    );
  }

  render() {
    const { name, avatar_url } = this.props;
    const { motimeter } = this.state;

    if (motimeter.length === 0) {
      clearInterval(this.timer);
      return (
        <div className="game">
          <div className="game__username">{name}</div>
          <img className="game__avatar" src="" />
          <div className="game__motivation">
            <p className="game__motivation--key">{name} has burnt out</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="game">
          <div className="game__username">{name}</div>
          <img className="game__avatar" src={avatar_url} />
          <div className="game__motivation">
            <p className="game__motivation--key">Motivation</p>
            <ul>
              {motimeter.map((heart, i) => {
                return <Motivation key={i} {...heart} />;
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
}
