import React from "react";

import "./footer.css"

export default function Footer() {
    const date = new Date();

    return (
        <>
            <div className="footer-container">
                Developed by &hearts; &copy; {date.getFullYear()}
            </div>
        </>
    )
}