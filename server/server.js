const express = require('express');
const PORT = process.env.PORT || 3002;
const knex = require('./knex/knex');
const cors = require('cors');
const { createServer } = require('http');
const { default: axios } = require('axios');


const app = express();
const server = createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:4000",
      methods: ["GET", "POST"],
      allowedHeaders: ["*"],
    }
  });

const playersList = [];

function addToPlayers(playerId) {
    playersList.push(playerId);
};

function removeFromPlayers(playerId, num) {
    playersList.pop();
    let startIndex = playersList.indexOf(playerId);
    playersList.slice(startIndex, num =1);
};



  
io.on('connection', (socket) => {
    console.log('new player connected, adding to players list')
    console.log(socket.id);


    let clientDetails = {
        name: 'firefox',
        id: 1,
        seenBefore: true
    }

    addToPlayers(clientDetails);
    console.log(`new player connected, there are now , ${playersList.length} players online`);

    io.emit('updatePlayerList', {});

    socket.on('disconnect', (socket) => {
        io.emit('updatePlayerList', {});
        removeFromPlayers(clientDetails);
        console.log(`there are now ${playersList.length} players online`)
    })

})

// TODO: fix cors
app.use(cors({}));

app.get('/', (req, res) => {
    res.send(playersList)
    res.sendStatus(200);
});

server.listen(PORT, () => {
    console.log('port listening on ' + PORT)
});


