import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './app/components/app';
import Welcome from './app/components/welcome';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Welcome}/>
    <Route path="/play/:type" component={App}/>
  </Router>,
  document.getElementById('root')
);
