/* global process */
import {createStore, applyMiddleware} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'profile-app',
    storage,
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStoreProd = initialState => {
    const middlewares = [
        sagaMiddleware
    ];
    const store = createStore(
        persistedReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);

    return {store, persistor}
};

const configureStoreDev = initialState => {
    const middlewares = [
        sagaMiddleware,
        reduxImmutableStateInvariant()
    ];
    const store = createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);

    return {store, persistor}
};


const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore