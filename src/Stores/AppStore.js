import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import UserReducer from './UserReducer';

export default createStore(combineReducers({
    session: UserReducer,
}), applyMiddleware(thunk));