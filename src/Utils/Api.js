import {SERVER_URL, API_VERSION, TOKEN_PREFIX} from '../config';

const INVALID_TOKEN_MESSAGE = 'invalid token';

function api(method, path, body, token = null) {
    return fetch(SERVER_URL + '/api/' + API_VERSION + path, {
        method: method,
        headers: Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, token ? {'Authorization': `${TOKEN_PREFIX} ${token}`} : {}),
        body: body
    })
    .then((response) => response.json());
}

export function login(facebookToken = '') {
    return api('POST', '/login', JSON.stringify({'token': facebookToken}))
        .then(res => {
            if(res.success)
              return res.token;

            throw 'API ERROR';
        });
}
