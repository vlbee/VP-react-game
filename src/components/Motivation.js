import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class Motivation extends React.Component {
  render() {
    return <li className="motivation">💜</li>;
  }
}

export default ErrorBoundary(Motivation);
