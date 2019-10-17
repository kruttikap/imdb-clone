import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import loginReducer from './reducers/loginReducer';
import rootReducer from "./redux/rootReducer";
import {Provider} from 'react-redux';

//Store -> Global State
let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//Action -> Define 

//Reducer -> Func that accepts current state and action and updates state.

//Dispatcher -> Send Action to Reducer


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
