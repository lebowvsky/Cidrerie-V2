import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import OurProducts from '../pages/OurProducts';


const ProjectRouter = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/our-products' component={OurProducts} />
      </Switch>
    </Router>
  )
}

export default ProjectRouter;