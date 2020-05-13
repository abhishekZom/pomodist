import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'react-jss';

import Layout from './Layout';

const styles = {
    home: {
        color: 'red'
    },
    welcomeText: {
        color: 'red'
    }
};

const Home = (props) => {
    const { classes } = props;
    return (
        <Layout>
            <p className={ classes.welcomeText }>Welcome to Pomodoist!</p>
            <p>
                <Link to="/dynamic">Create new tasks, organise and complete them with pomodoro sessions</Link>
            </p>
        </Layout>
    );
};

const styledHome = withStyles(styles)(Home);

export default styledHome;