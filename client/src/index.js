import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom"
import axios from "axios";
import AppRoutes from "./routes.jsx"

axios.defaults.baseURL = "http://localhost:3002";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <AppRoutes/>
    </Router>
);