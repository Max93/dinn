import {INIT_ACTION, RECEIVE_TOKEN, LOGOUT} from './actions';

const DEFAULT_STATE = {
    token: ''
};

export default function UserDataReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case INIT_ACTION:
            return Object.assign({}, DEFAULT_STATE, action.session);
        case RECEIVE_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case LOGOUT:
            return DEFAULT_STATE;
        default:
            return state;
    }
}
