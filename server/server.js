const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex');
const cors = require('cors');
const app = express();

// TODO: fix cors
app.use(cors({}));

app.get('/tasks', (req, res) => {
    console.log('received request')
});

app.listen(PORT, () => {
    console.log('port listening on ' + PORT)
})
