import Cookies from 'js-cookie';
import ky from 'ky';
import { getAccessToken, logout } from '../utils/auth';

const AuthHook = (request, options) => {
    const accessToken = getAccessToken();
    if (!options.ignoreAuth && accessToken) {
        
        request.headers.set('token', accessToken);
    }
}

const LogoutHook = (request, options, res) => {
    const isUnauthorizedError = res.status === 401;

    if (isUnauthorizedError) logout();
}
const kyFetch = ky.extend({
    headers: {
        'content-type': 'application/json',
    },
    prefixUrl: process.env.API_URL,
    credentials: 'include',
    hooks: {
        beforeRequest: [AuthHook],
        afterResponse: [LogoutHook],
    }
});

export default kyFetch;