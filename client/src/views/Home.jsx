import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { socketContext } from "../context/socketContext.jsx";


import GameView from './GameView.jsx';
import LoginForm from "../components/LoginForm.jsx";
import LoginPage from "../components/LoginPage.jsx";
import Card from '../components/Card.jsx';
import Avatar from '../components/Avatar.jsx';
import Signup from "../components/Signup.jsx";
import { AuthenticationContext } from "../context/authenticationContext.jsx";


const StyledTable = styled.div`
    display: flex;
    height: 300px;
    background-color: green;
    border-radius: 50px;
    position: relative;<App />
`;

const StyledPlayerBox = styled.div`
    border: 2px red solid;
`;

const StyledCards = styled.div`
    display: flex;
    justify-content: space-evenly;
`


const sendRequest = ()=> {
    axios.get("/");
}


function Home() {
    const authenticationStatus = useContext(AuthenticationContext);
    //const {serverStatus, playersOnline} = useContext(socketContext)

    // function startNewGame() {
    //     alert("starting game");
    // }


    return (
        <div>

            {authenticationStatus === null ? <Signup/> : <GameView/>}

            <div>
            <h1>
                Texas Hold'em
            </h1>
            </div>
            <div>
                There are  15 players and 2 active tables online, and 3 players not on any game
            </div>
        </div>
    )
};

export default Home;