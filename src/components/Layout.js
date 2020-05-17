import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'react-jss';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

const styles = {
    layoutContainer: {
        width:  '70%',
        maxWidth: '1024px',
        margin: '0px auto',
        textAlign: 'center',
        fontFamily: 'calibri, arial',
    }
};

const Layout = ({ classes, children }) => {
    return (
        <div className={ classes.layoutContainer }>
            { children }
        </div>
    );
};

const styledLayout = withStyles(styles)(Layout);

export default styledLayout;