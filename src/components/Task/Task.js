import React from 'react';
import withStyles from 'react-jss';

const styles = {
    taskContainer: {
        padding: '10px 0px',
        marginBottom: '2px',
        color: '#444444',
        height: '100%',
        backgroundColor: '#999999',
        borderRadius: '5px'
    }
}

const Task = ({ classes, taskData }) => {

    return (
        <div>
            <div className={classes.taskContainer}>
               this is a task
            </div >
        </div>
    )
}

const styledTask = withStyles(styles)(Task);

export default styledTask;