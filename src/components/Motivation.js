import React from 'react';
import { setTimeout, setInterval } from 'timers';
// import { demotivator } from '../utils/demotivate';

export default class Motivation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 10000 - props.key * 2000,
      visible: true
    };
  }
  componentDidMount() {
    startTimer = ({ timer }) => {
      console.log(this.state);
      setInterval(() => {
        this.setState({ visible: false });
      }, timer);
      console.log(this.state);
    };
  }
  render() {
    if (this.state.visible) {
      return (
        <li onLoad={this.startTimer()} className="motivation">
          💜
        </li>
      );
    }
  }
}
