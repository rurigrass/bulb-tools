import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

const Routes = () => {
  return (
    <div>
      <Layout>
        <Switch>
         <Route path="/" exact component={Home}/>
        </Switch>
      </Layout>
    </div>
  );
};

export default Routes;