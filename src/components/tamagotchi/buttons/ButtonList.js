import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
// import './buttonList.css';

class ButtonList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ButtonList = [
      { type: '💜', value: 3 },
      { type: '🐶', value: 2 },
      { type: '⭐', value: 1 }
    ];
    const { handleClick } = this.props;

    return (
      <section className="buttonList">
        <h2>Buttons</h2>
        {ButtonList.map((btn, i) => {
          return <Button handleClick={handleClick} key={i} {...btn} />;
        })}
      </section>
    );
  }
}

export default ButtonList;
