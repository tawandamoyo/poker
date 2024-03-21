import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";


import App from "./App.jsx"
axios.defaults.baseURL = "http://localhost:3002";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);