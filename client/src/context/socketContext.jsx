import React, {createContext, useState, useEffect} from "react";
import { io } from 'socket.io-client';
import axios from "axios";

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3002';


let defaultContext = {};
export const socketContext = createContext(defaultContext);

export function SocketContextProvider({children}) {
    const [socket, setSocket] = useState(null);
    const [playersOnline, setPlayersOnline] = useState([]);
    const [serverStatus, setServerStatus] = useState(null);
    // const [playerId, setPlayerId] = useState();


    async function getGameData() {
        let gameData = await axios.get('/');

        setPlayersOnline(gameData.data);

        console.log(`there are ${gameData.data.length} players online`)
    }

    useEffect(()=> {
        const newSocket = io(URL);

        function onConnect() {
            console.log('connected to sockets');
            setServerStatus(true);
            getGameData();
        }

        newSocket.on('connect', onConnect);

        newSocket.on('updatePlayerList', ()=> {
            console.log('updating players')
            getGameData();
        });

        setSocket(newSocket);

    }, []);

    return (
        <socketContext.Provider value={
            {
                socket, 
                serverStatus, 
                playersOnline
            }
        }>
            {children}
        </socketContext.Provider>
    )
};


