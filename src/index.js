import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import { hot } from "react-hot-loader/root";

// import  "./index.css";

const  render = (Component) =>
    ReactDOM.render(
        <Provider store={ store }>
            <Component />
        </Provider>,
     document.getElementById("root"));

render(hot(App));