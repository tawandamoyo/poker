import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { socketContext } from "../context/socketContext.jsx";

import Card from '../components/Card.jsx';
import Avatar from '../components/Avatar.jsx';


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

   

    return (
        <div className="container">
            <div>
                <p>Server {serverStatus ? <span>online</span> : <span>offline</span>} </p>
                
                {playersOnline.length > 1 ? 
                <div>
                    There are currently {playersOnline.length} players online

                    <button onClick={startNewGame}>Start game</button>
                </div>
                : 
                <p>You are the only player online, wait a little</p>
                }
            </div>

            

            <StyledTable>
                { playersOnline.map((player, index)=> {
                    return (
                        <StyledPlayerBox>
                            <StyledCards>
                                <Card/>
                                <Card/>
                            </StyledCards>
                            <Avatar/>
                        </StyledPlayerBox>  
                    )
                })}
                           
            </StyledTable>

            <div className="playerOptions">
                <button onClick={sendRequest}>Call</button>
                <button>Fold</button>
            </div>
        </div>
    )
};

export default Home;