import {createStore, applyMiddleware} from 'redux'
import redux_thunk from 'redux-thunk'

import main_reducer from './reducers.js';

export default createStore(main_reducer, applyMiddleware(redux_thunk));
