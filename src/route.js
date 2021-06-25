import React from 'react';
import PublicLayout from './layout/public'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Home from './views/Home';
export default function RouteComponent() {
    return (
        <Router>
            <PublicLayout>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </PublicLayout>
            
        </Router>
    )
}
