import React from 'react';

const Motivation = () => {
  return <li className="motivation">💜</li>;
};

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, avatar_url } = this.props;
    return (
      <div className="game">
        <div className="game__username">{name}</div>
        <img className="game__avatar" src={avatar_url} />
        <div className="game__motivation">
          <p className="game__motivation--key">Motivation</p>
          <Motivation />
        </div>
      </div>
    );
  }
}
