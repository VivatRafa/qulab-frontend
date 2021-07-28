import Cookies from 'js-cookie';
import ky from 'ky';
import { getAccessToken } from '../utils/auth';

const AuthHook = (request, options) => {
    const accessToken = getAccessToken();
    if (!options.ignoreAuth && accessToken) {
        
        request.headers.set('token', accessToken);
    }
}

const LogoutHook = (request, options) => {
    const isUnauthorizedError = request.status === 401;

    // if (isUnauthorizedError) logout();
}
const kyFetch = ky.extend({
    headers: {
        'content-type': 'application/json',
    },
    prefixUrl: process.env.API_URL,
    credentials: 'include',
    hooks: {
        beforeRequest: [AuthHook],
        afterResponse: [],
    }
});

export default kyFetch;