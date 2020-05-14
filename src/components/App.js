import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import withStyles from 'react-jss';
import Home from './Home';
import Loading from './Loading';

const styles = {
    appContainer: {
        background: '#C7C7C7',
        height: '100%'
    }
};

const AsyncDynamicPage = importedComponent(
    () => import(/*webpackChunkName: 'DynamicPage' */ './DynamicPage'),
    {
        LoadingComponent: Loading
    }
);

const AsyncNoMatch = importedComponent(
    () => import(/* webpackChunkName: 'NoMatch' */  './NoMatch'),
    {
        LoadingComponent: Loading
    }
)

const App = ({ classes }) => {
    return (
        <Router>
            <div className={ classes.appContainer }>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/dynamic" component={ AsyncDynamicPage } />
                    <Route component={ AsyncNoMatch } />
                </Switch>
            </div>
        </Router>
    );
};

const styledApp = withStyles(styles)(App);
export default styledApp;