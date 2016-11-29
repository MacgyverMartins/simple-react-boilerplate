import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './awesome-component.jsx';

class App extends React.Component {
  render () {
    return (
    <div>
      <p> Simple React Boilerplate using NPM, Babel6 and Webpack </p>
      <AwesomeComponent />
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
