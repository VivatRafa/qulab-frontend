import { useState } from "react"
import { getAccessToken, logout } from "../utils/auth"

export const useUserInfo = () => {
    const [token] = useState(getAccessToken());
    
    try {
        const [, userInfo] = token.split('.');
        const user = JSON.parse(atob(userInfo));

        return [user];
    } catch (e) {
        return []
    }
}

export const asd = () => '';