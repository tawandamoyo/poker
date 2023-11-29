import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { socketContext } from "../context/socketContext.jsx";


import GameView from './GameView.jsx';
import Card from '../components/Card.jsx';
import Avatar from '../components/Avatar.jsx';
import Login from "../components/Login.jsx";


const StyledTable = styled.div`
    display: flex;
    height: 300px;
    background-color: green;
    border-radius: 50px;
    position: relative;
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
    const {serverStatus, playersOnline} = useContext(socketContext)

    function startNewGame() {
        alert("starting game");
    }

    function toggleLoginPage() {
        // alert("are you sure you want to login")
        console.log('hellow you')
    }
    const isAuthenticated = true;

    return (
        <div>

            {isAuthenticated ? <GameView/> : <h2>HI</h2>}

            {/* <div>
            <h1>
                Texas Hold'em
            </h1>
            </div>

            <div>
                "Hi welcome. On this game you can play play against other players. If they are available. It's free to login and we don't use your data for any purposes. You can login with any unique username and password"
            </div>
            <div>
                There are  15 players and 2 active tables online, and 3 players not on any game
            </div>
                <Login/>
                <button>Play as Guest</button>
            </div>
         */}

         </div>
    )
};

export default Home;