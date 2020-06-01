import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import BillCalculatorContainer from './containers/BillCalculator/BillCalculatorContainer';
import TariffFinder from './containers/TariffFinder/TariffFinder';
import SSCFinder from './containers/SSCFinder/SSCFinder';
import DisputeCalculator from './containers/DisputeCalculator/DisputeCalculator';
import Business from './containers/Business';
import BusinessTariffFinder from './containers/Business/BusinessTariffFinder';
import Prepay from './containers/Prepay';
import PaypointFinder from './containers/Prepay/PaypointFinder';
import QuoteGenerator from './containers/QuoteGenerator/QuoteGenerator';
import Checklists from './containers/Checklists';
import ChecklistsPrepayElec from './containers/Checklists/ChecklistsPrepayElec';

const App = () => {

    useEffect(() => {
        ReactGa.initialize('UA-166320614-1');
        //to report page view
        ReactGa.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div>
            <Layout>
                <Switch>
                    {/* <Route path='/bill-calculator' component={BillCalculatorContainer} />
                    <Route path='/tariff-finder' component={TariffFinder} />
                    <Route path='/dispute-calculator' component={DisputeCalculator} />
                    <Route path='/ssc-finder' exact component={SSCFinder} />
                    <Route path='/quote-generator' component={QuoteGenerator} />
                    <Route path='/business/tariff-finder' component={BusinessTariffFinder} />
                    <Route path='/business' component={Business} />
                    <Route path='/prepay/paypoint-finder' component={PaypointFinder} />
                    <Route path='/prepay' component={Prepay} />
                    <Route path='/checklists/prepay-elec' component={ChecklistsPrepayElec} />
                    <Route path='/checklists/prepay-elec' component={ChecklistsPrepayElec} />
                    <Route path='/checklists' component={Checklists} /> */}
                    <Route path='/' exact component={Home} />
                </Switch>
            </Layout>
        </div>
    );
};

export default App;