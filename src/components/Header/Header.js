import React from 'react';
import withStyles from 'react-jss';

const styles = {
    header: {
        display: 'block',
        padding: '30px 0px',
        height: 'auto',
        color: '#333333',
        marginBottom: '10px!important',
        backgroundColor: '#999999'
    }
}

const Header = ({ classes }) => {

    return(
        <div>
            <h1 className={ classes.header }>
            Welcome to pomodoist!
            </h1 >
        </div>
    )
}

const styledHeader  = withStyles(styles)(Header);

export default styledHeader;