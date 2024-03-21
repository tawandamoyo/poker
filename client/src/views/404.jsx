import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home.jsx";

const Error404 = () => {
    return (
        <div className="container">
            <p>Resource not found, return to <Link> </Link></p>
        </div>
    )
}

export default Error404;