import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.css';
import rootSaga from './sagas';
import rootReducer from './reducers';
import { AddressList, AddressAdd } from './views/Address';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const enhancers = [applyMiddleware(...middlewares)];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable */

const store = createStore(rootReducer, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga);

const App = () => {
    return (
        <section>
            <Route exact path="/" component={AddressList} />
            <Route exact path="/add" component={AddressAdd} />
        </section>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
