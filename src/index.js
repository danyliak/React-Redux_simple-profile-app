import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Modal from 'react-modal'
import 'core-js'

import registerServiceWorker from './registerServiceWorker'
import './sass/style.css'
import App from './App'
import configureStore from './store/configureStore'

Modal.setAppElement('#profile-app-root');

const { store, persistor } = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
), document.getElementById('profile-app-root'));

registerServiceWorker();