import React, { Fragment } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import TopInformation from './components/TopInformation'
import GridInformation from './components/GridInformation'
import CodeDetails from './components/CodeDetails'
import PortfolioDetails from './components/PortfolioDetails'
import ExperienceDetails from './components/ExperienceDetails'
import NotFoundPage from './components/NotFoundPage'

const App = () => (
    <Fragment>
        <TopInformation />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={GridInformation} />
                <Route exact path="/code" component={CodeDetails} />
                <Route exact path="/portfolio" component={PortfolioDetails} />
                <Route exact path="/experience" component={ExperienceDetails} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    </Fragment>
);

export default App