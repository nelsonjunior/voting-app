import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import ScrollTop from './shared/components/ScrollTop'
import Home from './pages/Home' 

export default props => ( 
    <HashRouter>
        <ScrollTop>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </ScrollTop>
    </HashRouter>
)