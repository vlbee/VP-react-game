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
  }
  render() {
    const { name, avatar_url, motimeter } = this.props;
    return (
      <div className="game">
        <div className="game__username">{name}</div>
        <img className="game__avatar" src={avatar_url} />
        <div className="game__motivation">
          <p className="game__motivation--key">Motivation</p>
          <ul />
          <ul>
            {motimeter.map((heart, i) => {
              return <Motivation key={i} index={i} {...heart} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
