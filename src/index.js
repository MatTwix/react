import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./redux/store/configureStore"; //, persistor
// import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*<PersistGate persistor={persistor}>*/}
            <Provider store={store}>
                <App/>
            </Provider>
        {/*</PersistGate>*/}
    </BrowserRouter>
);