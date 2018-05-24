import React from 'react';
// import { setTimeout, setInterval } from 'timers';
// import { demotivator } from '../utils/demotivate';

export default class Motivation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 2000,
      visible: true
    };
  }

  componentDidMount() {
    const { duration } = this.state;
    this.timer = setTimeout(
      duration => this.setState({ visible: false }),
      duration
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    if (this.state.visible) {
      return <li className="motivation">💜</li>;
    } else {
      return <li className="motivation" />;
    }
  }
}
