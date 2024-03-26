import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { socketContext } from "../context/socketContext.jsx";

import Player from "../components/Player.jsx";

import Card from '../components/Card.jsx';
import Avatar from '../components/Avatar.jsx';
import LoginPage from "../components/LoginPage.jsx";

import './table.css'
import { Button } from "@mui/base";


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

    const players = [
        { name: "Tawanda", balance: 50 },
        { name: "Nyanga", balance: 50 },
        { name: "Rukweza", balance: 50 },
        { name: "Jojo", balance: 50 },
        { name: "Jon", balance: 50 },
        { name: "Pete", balance: 50 },
    ]

    return (
        <>
            <div className="table-container">
                {players.slice(0, 3).map((player, index) => (
                    <Player key={index} name={player.name} balance={player.balance} />
                ))}
                <div className="center-row">
                    { players.slice(3, 5).map((player, index) => (
                        <Player key={index} name={player.name} balance={player.balance} />
                    ))}

                    <div className="center-cards">
                        <div className="card">
                            <div className="card-content">Card</div>
                        </div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>

                </div>
                {players.slice(5, 8).map((player, index) => (
                    <Player key={index} name={player.name} balance={player.balance} />
                ))}
                <div className="controls">
                    <Button>Call</Button>
                    <Button>Fold</Button>
                </div>
            </div>

        </>
    )

    // return (
    //     <div className="container">
    //         <div>
    //             <div>
    //                 <p>Server {serverStatus ? <span>online</span> : <span>offline</span>} </p>
                    
    //                 {playersOnline.length > 1 ? 
    //                 <div>
    //                     There are currently {playersOnline.length} players online

    //                     <button onClick={startNewGame}>Start game</button>
    //                 </div>
    //                 : 
    //                 <p>You are the only player online, wait a little</p>
    //                 }
    //             </div>
               
    //             <div>
    //                 <button onClick={toggleLoginPage}>login</button> 
    //                 {logged ? <Login toggle={toggleLoginPage} /> : null }

    //             </div>
    //         </div>

            

    //         <StyledTable>
    //             { playersOnline.map((player, index)=> {
    //                 return (
    //                     <StyledPlayerBox>
    //                         <StyledCards>
    //                             <Card/>
    //                             <Card/>
    //                         </StyledCards>
    //                         <Avatar/>
    //                     </StyledPlayerBox>  
    //                 )
    //             })}
                           
    //         </StyledTable>

    //         <div className="playerOptions">
    //             <button onClick={sendRequest}>Call</button>
    //             <button>Fold</button>
    //         </div>
    //     </div>
    // )
};

export default Home;