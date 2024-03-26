import React from "react";
import ProfileAvatar from "./Avatar.jsx";

function Player({ name, balance }) {
    return (
        <div className="playerModulo">
            <ProfileAvatar/>
            <h3 className="nameField">{name}</h3>
            <h3 className="amountField">${balance}</h3>
        </div>
    )
}

export default Player;