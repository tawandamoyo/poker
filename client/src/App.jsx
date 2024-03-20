import React, { FC, ReactNode } from "react";
import { SocketContextProvider } from "./context/socketContext.jsx";
import Home from "./views/Home.jsx";

type: Props = {
    children: ReactNode
}

const App: FC = ({ children }) => (
    <div className="App">
        {children}
    </div>
)
export default App;