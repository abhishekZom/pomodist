import React, { useState } from 'react';
import withStyles from 'react-jss';
import {
    Fab,
    TextField,
    InputAdornment,
    IconButton
} from '@material-ui/core';
import { CancelOutlined, BackspaceOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';

import Task from '../Task/Task';
import initialTasks from './seeder';

const styles = {
    tasksList: {
        padding: '10px 0px',
        overFlow: 'scroll',
        maxHeight: '700px!important'
    },
    newTask: {
        padding: '10px 0px',
        marginBottom: '20px',
        color: '#34162D',
        height: '100%',
        borderRadius: '5px',
        border: '2px solid #34162D',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: '600',
        backgroundColor: '#E7CAC6',
        '&:hover': {
            backgroundColor: '#34162D',
            color: '#ffffff'
        }
    },
    newTaskActive: {
        padding: '0px 20px 0px 10px',
        marginBottom: '10px',
        color: '#34162D',
        height: '100%',
        borderRadius: '5px',
        border: '2px solid #FFDBC9',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: '600',
        backgroundColor: '#FFDBC9'
    },
    addNewFabBtn: {
        position: 'fixed',
        top: '0',
        fontSize: '18px'
    },
    clearAll: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    cancelNewTask: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    newTaskInputContainer: {
        padding: '10px 20px',
    }
}

const TasksList = ({ classes }) => {
    const [isNewTaskActive, setIsNewTaskActive] = useState(false);
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');
    let id = 10;

    const handleAddNewTask = (e) => {
        if(e.keyCode === 13 && e.target.value !== '') {
            const tempTasks = tasks;
            tempTasks.unshift({
                id: id++,
                task: e.target.value,
                labels: ['todo'],
                priority: 1,
                isCompleted: false,
                dueDate: '',
                pomodoroTotal: 4,
                pomodoroLeft: 2,
            });
            setTasks(tempTasks);
            setIsNewTaskActive(false);
        } else if(e.keyCode === 27) {
            setIsNewTaskActive(false);
        }
    }

    const handleDeleteTask = (id) => {
        tasks.forEach((ele, i) => {
            if(id === ele.id) {
                const tempTasks = tasks;
                tempTasks.splice(i, 1);
                setTasks(tempTasks);
                setIsNewTaskActive(false);
            }
        })
    }

    const renderNewTaskInput = () => {
        return (
            <div className={ classes.newTaskInputContainer}>
                <TextField
                    id="standard-full-width"
                    label="New Task"
                    style={{ margin: 8 }}
                    placeholder="Enter a new task"
                    helperText="what do you wanna get done next?"
                    fullWidth
                    margin="normal"
                    value={ newTask }
                    onChange={ e => setNewTask(e.target.value)}
                    onKeyDown={handleAddNewTask }
                    InputProps={{
                        endAdornment: <InputAdornment
                            position="end"
                            style={{
                                marginRight: 20
                            }}>
                            <Tooltip title="clear input (ctrl + backspace)">
                                <BackspaceOutlined
                                    style={{ marginRight: 10, fontSize: 16 }}
                                    className={classes.clearAll}
                                    onClick={() => { setNewTask('') }}
                                    data-tip="clear input" />
                            </Tooltip>
                            <Tooltip title="cancel (Esc)">
                                <CancelOutlined
                                    style={{ fontSize: 16 }}
                                    className={classes.cancelNewTask}
                                    onClick={e => setIsNewTaskActive(false)} />
                            </Tooltip>
                        </InputAdornment>,
                    }}
                />
            </div>
        )
    };

    const renderNewTask = () => {
        return (
            <>
                {
                    isNewTaskActive
                    ?
                        <div className={classes.newTaskActive}>
                            { renderNewTaskInput() }
                        </div >
                    :
                        <Tooltip title="Press: ctrl + n">
                            <div className={classes.newTask} onClick={e => setIsNewTaskActive(true)}>
                                Add a new Task
                        </div >
                        </Tooltip>
                }
            </>
        )
    };

    return (
        <div className={ classes.tasksList }>
            {/* <Fab className={classes.addNewFabBtn} variant="round" size="large" color="primary">+</Fab> */}
            { renderNewTask() }
            { 
                tasks.map((ele, i) => {
                    return <Task
                        key={ele.id}
                        taskData={ele}
                        handleDeleteTask={handleDeleteTask}>
                    </Task>
                })
            }
        </div>
    )
}

const styledTasksList = withStyles(styles)(TasksList);

export default styledTasksList;