import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const Routes = () => {
    return (
        <Switch>
            <Route path='/about'>
                <AboutPage />
            </Route>

            <Route path='/'>
                <HomePage />
            </Route>
        </Switch>
    );
}

export default Routes;