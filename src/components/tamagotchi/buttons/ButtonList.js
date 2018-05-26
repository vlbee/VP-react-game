import React from 'react';
import Button from './Button';
import './buttonList.css';
import PropTypes from 'prop-types';

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
      <ul className="buttonList">
        {ButtonList.map((btn, i) => {
          return <Button handleClick={handleClick} key={i} {...btn} />;
        })}
      </ul>
    );
  }
}

export default ButtonList;
