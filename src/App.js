import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import BillCalculatorContainer from './containers/BillCalculator/BillCalculatorContainer';
import TariffFinder from './containers/TariffFinder/TariffFinder';

const App = () => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path='/bill-calculator' component={BillCalculatorContainer} />
                    <Route path='/tariff-finder' component={TariffFinder} />
                    <Route path='/' exact component={Home} />
                </Switch>
            </Layout>
        </div>
    );
};

export default App;