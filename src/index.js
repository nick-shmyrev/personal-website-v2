import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/styles.scss';

// Import components
import Header from './components/Header';
import IndexPage from './components/IndexPage';
import err404Page from './components/Err404Page';


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={IndexPage}/>
          <Route component={err404Page}/>
        </Switch>
      </div>
    </BrowserRouter>
);

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
