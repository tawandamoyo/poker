import React, {useState, createContext, useMemo, useEffect} from "react";
import Cookies from "js-cookie";

const authenticationDefaults = {
    authenticationStatus: null,
    onLogin: () => {},
    onLogout: () => {}
}

export const AuthenticationContext = createContext(authenticationDefaults);

export function AuthenticationContextProvider({ children }) {
    const [authenticationStatus, setAuthenticationStatus] = useState(null);

    const onLogin = () => {
        setAuthenticationStatus(Cookies.get('access.vbqw9xjb'))
    }
    const onLogout = () => {
        setAuthenticationStatus(null)
    }

    useEffect(() => {
        setAuthenticationStatus(Cookies.get('access.vbqw9xjb'))
    }, []);

    // const value = useMemo(() => {
    //     return {
    //         authenticationStatus,
    //         onLogin,
    //         onLogout
    //     }
    // }, [authenticationStatus]);

    return (
        <AuthenticationContext.Provider>
            {children}
        </AuthenticationContext.Provider>
    )
}