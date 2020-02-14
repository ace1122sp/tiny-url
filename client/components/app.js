import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';
import HomeContainer from './home/container';
import AdminContainer from './admin/container';

import '../style.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path='/admin' component={AdminContainer} />
        <Route path='/' component={HomeContainer} />
      </Switch>
    </Fragment>
  );
};

export default App;
