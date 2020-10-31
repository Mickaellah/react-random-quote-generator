import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import GenerateQuote from '../components/GenerateQuote';
import {
	BrowserRouter as Router,
    Switch,
	Route
} from 'react-router-dom';

import QuoteDetail from '../components/QuoteDetail';

export default function App() {


    return (
        <>
            <Router>
                <Switch>
                    <Route path="/authors/:id">
                        <QuoteDetail />
                    </Route>
                    <Route path="/">
                        <GenerateQuote />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

{/* <Router>
    <Switch>
        <Route path="/quote/:id">
            <QuoteDetail />
        </Route>
        <Route>
            <GenerateQuote handleClick={handleClick} {...quote}/>
        </Route>
    <Switch/>
</Router> */}
