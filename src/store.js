import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware({
    onError: (error, { sagaStack }) => {
        console.error(error);
        console.debug(sagaStack);
    },
});
const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware));
const store = createStore(
    rootReducer,
    enhancers
);

sagaMiddleware.run(rootSaga);

export default store;
