import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./views/Home.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import Error404 from "./views/404.jsx"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element ={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;