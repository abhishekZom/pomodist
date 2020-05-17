import React, {useState} from 'react';
import withStyles from 'react-jss';
import {
    TextField,
    InputAdornment,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CancelOutlined, BackspaceOutlined, PlayCircleOutline } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';

import PomodoroDialog from '../Pomodoro/PomodoroDialog';

const styles = {
    taskContainer: {
        padding: '10px 20px',
        marginBottom: '15px',
        color: '#555555',
        height: '100%',
        borderRadius: '5px',
        border: '1px solid #95818E',
        fontSize: '18px',
        backgroundColor: '#E7CAC6!important',
        boxShadow: '-3px 2px 10px 0px rgba(0,0,0,0.75)',
        '&:hover': {
            boxShadow: '-1px 1px 3px 0px rgba(0,0,0,0.75)',
        }
    },
    taskUpperRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        padding: '0px 20px',
        width: '100%'
    },
    taskText: {
        color: '#34162D',
        fontWeight: '500'
    },
    taskLowerRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        padding: '0px 20px',
    },
    labelText: {
        '&:hover': {
            color: '#34162D',
            cursor: 'pointer'
        }
    },
    editIcon: {
        cursor: 'pointer',
        marginRight: '5px'
    },
    deleteIcon: {
        cursor: 'pointer'
    },
    labelsContainer: {
        fontSize: '12px'
    },
    pomodoroLabel: {
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
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
    pomodoroPlay: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}

const Task = ({ classes, taskData, handleDeleteTask }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isPomodoroOpen, setIsPomodoroOpen] = useState(false);

    return (
        <div className={ classes.taskContainer }>
            <div className={classes.taskUpperRow}>
                {
                    isEdit ?
                    <span>
                        <TextField
                            id="standard-full-width"
                            label="make changes"
                            style={{ margin: 8 }}
                            placeholder="edit this task"
                            helperText="what changes do you want to make?"
                            fullWidth
                            margin="normal"
                            // onChange={e => setNewTask(e.target.value)}
                            // onKeyDown={handleAddNewTask}
                            InputProps={{
                                endAdornment: <InputAdornment
                                    position="end"
                                    style={{
                                        marginRight: 20
                                    }}>
                                    <Tooltip title="clear input (ctrl + backspace)">
                                        <BackspaceOutlined
                                            size="small"
                                            style={{ marginRight: 10, fontSize: 16 }}
                                            className={classes.clearAll}
                                            onClick={() => { setNewTask('') }} />
                                    </Tooltip>
                                    <Tooltip title="cancel (Esc)">
                                        <CancelOutlined
                                            style={{ fontSize: 16 }}
                                            className={classes.cancelNewTask}
                                            onClick={e => setIsEdit(false)} />
                                    </Tooltip>
                                </InputAdornment>,
                            }}
                        />
                    </span> 
                :
                    <span className={ classes.taskText }>
                        {taskData.task}
                    </span>
                }
                <span>
                    <Tooltip title="edit task  (ctrl + left click)">
                        <EditIcon className={classes.editIcon} onClick={e => setIsEdit(true)} />
                    </Tooltip>
                    <Tooltip title="delete task">
                        <DeleteIcon className={classes.deleteIcon} onClick={e => handleDeleteTask(taskData.id)} />
                    </Tooltip>
                </span>
            </div >
            <div className={classes.taskLowerRow}>
                <span className={ classes.labelsContainer }>
                    {taskData.labels.map((ele) => {
                        return (<span key={ ele } className={ classes.labelText }><u> { ele } </u>&nbsp;</span>)
                    })}
                </span>
                <span className={ classes.pomodoroLabel }>
                    <span>
                        pomodoro: {taskData.pomodoroDone} / {taskData.pomodoroTotal}
                    </span>
                    <Tooltip title="start pomodoro session">
                        <PlayCircleOutline
                            className={classes.pomodoroPlay}
                            style={{ fontSize: 18, marginLeft: '10px' }}
                            onClick={e =>  setIsPomodoroOpen(true)}></PlayCircleOutline>
                    </Tooltip>
                </span>
            </div >
            <PomodoroDialog
                open={isPomodoroOpen}
                onClose={ () => { setIsPomodoroOpen(false)}}
                dialogTitle="Manage your pomodoro sessions here"
                taskData={ taskData }
            ></PomodoroDialog>
        </div>
    )
}

const styledTask = withStyles(styles)(Task);

export default styledTask;