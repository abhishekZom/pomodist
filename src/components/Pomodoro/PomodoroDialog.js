import React from 'react';
import withStyles from 'react-jss';
import { lighten } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import { PlayCircleOutline } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';

const styles = {
    paper: {
        minHeight: '450px',
        top: '-100px',
        backgroundColor: '#FED9D0!important'
    },
    titleRoot: {
        textAlign: 'center',
        color: '#34162D',
        backgroundColor: '#E7CAC6',
        fontSize: '30px',
        fontWeight: '600'
    },
    pomodoroDialogContent: {
        textAlign: 'center',
        fontSize: '22px',
        padding: '20px'
    },
    greenText: {
        color: 'green'
    },
    redText: {
        color: 'red'
    }
}
const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c',
    },
})(LinearProgress);

const PomodoroDialog = ({ classes, onClose, open, dialogTitle, taskData }) => {

    const handleClose = () => {
        onClose();
    };

    const renderDialogTitle = () => {
        return (
            <DialogTitle
                id="dialog-title"
                classes={{
                    root: classes.titleRoot
                }}>
                <div>{ dialogTitle }</div>
            </DialogTitle>
        )
    };

    const renderDialogContent = () => {
        return (<DialogContent>
            <div className={ classes.pomodoroDialogContent }>
                <p>{taskData.task}</p>
                <BorderLinearProgress
                    className={ classes.margin }
                    variant="determinate"
                    color="warning"
                    value={Math.round((taskData.pomodoroDone/taskData.pomodoroTotal) * 100) }
                />
                <Tooltip title="start next session (space)">
                    <PlayCircleOutline
                        style={{ fontSize: '50px ', margin: '20px 0px', cursor: 'pointer' }}
                    />
                </Tooltip>
                <p>
                    { taskData.pomodoroDone !== taskData.pomodoroTotal
                    ?
                        <>
                            <span className={classes.greenText}>Start Session </span>
                            /
                            <span className={classes.redText}> Start Break</span>
                        </>
                    :
                        <span className={classes.greenText}>Congrats! You made it through!</span>
                    }
                    
                </p>
                <p>Pomodoro Sessions Done</p>
                <p>
                    <span className={classes.greenText }>
                        { taskData.pomodoroDone }
                    </span> / 
                    <span className={classes.redText }>
                            { taskData.pomodoroTotal }
                    </span>
                </p>
            </div>
           
        </DialogContent>)
    }

    return (
        <div>
            <Dialog
                onClose={handleClose}
                classes={{
                    paper: classes.paper,
                }}
                aria-labelledby="simple-dialog-title"
                open={open}
                maxWidth="sm"
                fullScreen={ false }
                fullWidth={ true }>
                    <>
                        { renderDialogTitle() }
                        {renderDialogContent() }
                    </>
            </Dialog>
        </div>
    )
}

const styledPomodoroDialog = withStyles(styles)(PomodoroDialog);

export default styledPomodoroDialog;