const taskInitialState = {
    id: '',
    task: '',
    priority: 4,
    labels: [],
}

const taskReducer = (state = taskInitialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_TASK': {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default taskReducer;