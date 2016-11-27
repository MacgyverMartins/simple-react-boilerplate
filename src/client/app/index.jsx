import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Simple React Boilerplate using NPM, Babel6 and Webpack </p>;
  }
}

render(<App/>, document.getElementById('app'));
