import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HeaderMenu from '../components/header/HeaderMenu';
import HomePage from '../pages/home-page/HomePage';
import OurProducts from '../pages/our-products-page/OurProducts';
import ContactPage from '../pages/contact-page/ContactPage';


const ProjectRouter = () => {
  return(
    <Router>
      <HeaderMenu />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/our-products' component={OurProducts} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </Router>
  )
}

export default ProjectRouter;