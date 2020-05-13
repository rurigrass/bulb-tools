import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Business from './containers/Business';
import BillCalculatorContainer from './containers/BillCalculator/BillCalculatorContainer';
import TariffFinder from './containers/TariffFinder/TariffFinder';
import SSCFinder from './containers/SSCFinder/SSCFinder';
import DisputeCalculator from './containers/DisputeCalculator/DisputeCalculator';
import BusinessTariffFinder from './containers/Business/BusinessTariffFinder';

const App = () => {

    useEffect(() => {
        ReactGa.initialize('UA-166320614-1');
        //to report page view
        ReactGa.pageview(window.location.pathname + window.location.search);
    }, [])

    console.log(window.location.pathname + window.location.search);
    

    return (
        <div>
            <Layout>
                <Switch>
                    <Route path='/bill-calculator' component={BillCalculatorContainer} />
                    <Route path='/tariff-finder' component={TariffFinder} />
                    <Route path='/dispute-calculator' component={DisputeCalculator} />
                    <Route path='/ssc-finder' exact component={SSCFinder} />
                    <Route path='/business/tariff-finder' component={BusinessTariffFinder} />
                    <Route path='/business' component={Business} />
                    <Route path='/' exact component={Home} />
                </Switch>
            </Layout>
        </div>
    );
};

export default App;