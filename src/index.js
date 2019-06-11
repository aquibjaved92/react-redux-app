import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { Provider } from "react-redux";
import configureStore from "./redux/store/store";

const reduxStore = configureStore();

ReactDOM.render(
    <Provider store={reduxStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
