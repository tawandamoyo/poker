import { Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./views/Home.jsx";

const AppRoutes = ()=> {
    <App>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </App>
}

export default AppRoutes;