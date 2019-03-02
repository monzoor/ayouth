import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Routes from '../Routes';
import reduxStore from '../Store';

library.add(fas);


class App extends Component {
    render() {
        return (
            <Routes />
        );
    }
}

const ReduxApp = () => (
    <Provider store={reduxStore}>
        <App />
    </Provider>
);
export default ReduxApp;
