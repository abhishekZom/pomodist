import React, { useState } from 'react';
import withStyles from 'react-jss';

import Task from '../Task/Task';

const styles = {
    tasksList: {
        padding: '10px 0px',
        color: '#444444',
        overFlow: 'scroll',
        maxHeight: '700px!important'
    },
    newTask: {
        padding: '10px 0px',
        marginBottom: '5px',
        color: '#444444',
        height: '100%',
        backgroundColor: '#999999',
        borderRadius: '5px'
    }
}

const TasksList = ({ classes }) => {
    const [tasks, setTasks] = useState([2,33,4,2,3,52,56,5325,65,3,3,3,4,3,3,4,3,4,3,4,3435,]);

    return (
        <div className={ classes.tasksList }>
            <div className={ classes.newTask }>
                Add a new Task
            </div >
            { tasks.map((ele, i) => {
                return <Task></Task>
            })}
        </div>
    )
}

const styledTasksList = withStyles(styles)(TasksList);

export default styledTasksList;