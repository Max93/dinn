export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const LOGOUT = 'LOGOUT';
export const INIT_ACTION = 'INIT_ACTION';

export function restoreSession(token) {
    return function (dispatch) {
        if(token)
            dispatch(refreshToken(token));
        
        dispatch({
            type: null
        });
    };
}

function refreshToken(token) {
    return {
        type: RECEIVE_TOKEN,
        token
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}
