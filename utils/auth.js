import Cookies from "js-cookie";

export const getAccessToken = () => Cookies.get('jwt_access_token');

export const logout = () => {
    Cookies.remove('jwt_access_token');
    localStorage.clear();
    window.location.href = '/cabinet/login';
}