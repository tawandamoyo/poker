import React from "react";
import { SocketContextProvider } from "./context/socketContext.jsx";
import Home from "./views/Home.jsx";

function App() {
    return (
        <SocketContextProvider>
            <Home/>
        </SocketContextProvider>
    )
};

export default App;