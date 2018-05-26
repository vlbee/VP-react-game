import React from 'react';
import Motivation from './Motivation';
import './game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startDemotivation();
  }

  render() {
    const { name, avatar_url, motimeter, level } = this.props;

    return (
      <div className="game">
        <div className="game__username">{name}</div>
        <img
          className="game__avatar"
          src={
            level === 0
              ? 'https://twemoji.maxcdn.com/2/72x72/1f525.png' // Fire Emoji courtesy of Twitter: https://github.com/twitter/twemoji
              : avatar_url
          }
        />
        <div className="game__motivation">
          {level === 0 ? (
            <span className="game__motivation--key">{name} has burnt out!</span>
          ) : (
            <React.Fragment>
              <span className="motivation__key">Motivation Level:</span>
              <ul className="motivation__level">
                {motimeter.map((heart, i) => {
                  return <Motivation key={i} {...heart} />;
                })}
              </ul>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Game;
