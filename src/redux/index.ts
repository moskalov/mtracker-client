import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import {rootReducer} from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export {store};
