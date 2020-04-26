import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import BillCalculatorContainer from './containers/BillCalculator/BillCalculatorContainer';
import TariffFinder from './containers/TariffFinder/TariffFinder';
import DisputeCalculator from './containers/DisputeCalculator/DisputeCalculator';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/bill-calculator' component={BillCalculatorContainer} />
                    <Route path='/tariff-finder' component={TariffFinder} />
                    <Route path='/dispute-calculator' component={DisputeCalculator} />
                    <Route path='/' exact component={Home} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;