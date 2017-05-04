import React from 'react';
import Connect4 from './fourcon/connect4';
import {Link} from 'react-router';

export default class Welcome extends React.Component {

  render() {
    return (
      <div className="welcome-container">
        <h4>May the fourth be with you</h4>
        <Link to={`/play/friend`}>
            Play with friend
        </Link>
        <Link to={`/play/ai`}>
            Play with AI
        </Link>
      </div>
    );
  }
}
