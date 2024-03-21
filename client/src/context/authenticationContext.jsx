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
}