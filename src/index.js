import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './styles/styles.scss';

// Import components
import Header from './components/Header';
import HomePage from './components/Home';
import AboutPage from './components/About';
import PortfolioPage from './components/Portfolio';
import ContactPage from './components/Contact';
import Footer from './components/Footer';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
