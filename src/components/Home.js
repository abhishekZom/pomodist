import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'react-jss';

import Layout from './Layout';
import Header from './Header/Header';
import TasksList from './TasksList/TasksList';

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
            <Header></Header>
            <TasksList></TasksList>
        </Layout>
    );
};

const styledHome = withStyles(styles)(Home);

export default styledHome;