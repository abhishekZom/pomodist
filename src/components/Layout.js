import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import withStyles from 'react-jss';

const styles = {
    h1: {
        marginTop: '10px!important',
        marginBottom: '10px!important'
    }
};

const Layout = ({ classes, children }) => {
    return (
        <Container>
            <Link to="/">
                <Header as="h1" className={classes.h1}>
                    Pomodoist
        </Header>
            </Link>
            {children}
            <Divider />
        </Container>
    );
};

const styledLayout = withStyles(styles)(Layout);

export default styledLayout;