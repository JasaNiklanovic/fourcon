import React from 'react';
import Connect4 from './fourcon/connect4';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Connect4 type={this.props.params.type}/>
      </div>
    );
  }
}
