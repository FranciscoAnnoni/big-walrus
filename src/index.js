import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Bar from "./Bar";
import {AnimatePresence} from "framer-motion";


ReactDOM.render(
    <Router>
      <AnimatePresence>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/bar' component={Bar} />
        </Switch>
      </AnimatePresence>
    </Router>
    ,
  document.getElementById('root')
);

