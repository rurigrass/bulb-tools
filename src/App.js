import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Business from './containers/Business';
import BillCalculatorContainer from './containers/BillCalculator/BillCalculatorContainer';
import TariffFinder from './containers/TariffFinder/TariffFinder';
import DisputeCalculator from './containers/DisputeCalculator/DisputeCalculator';
import BusinessTariffFinder from './containers/Business/BusinessTariffFinder';

const App = () => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path='/bill-calculator' component={BillCalculatorContainer} />
                    <Route path='/tariff-finder' component={TariffFinder} />
                    <Route path='/dispute-calculator' component={DisputeCalculator} />
                    <Route path='/business/tariff-finder' component={BusinessTariffFinder} />
                    <Route path='/business' component={Business} />
                    <Route path='/' exact component={Home} />
                </Switch>
            </Layout>
        </div>
    );
};

export default App;