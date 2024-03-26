const {Router} = require('express');

const router = Router();

const players = [
    { name: "Tawanda", balance: 650 },
    { name: "Nyanga", balance: 590 },
    { name: "Rukweza", balance: 350 },
    { name: "Jojo", balance: 980 },
    { name: "Jon", balance: 560 },
    { name: "Pete", balance: 50 },
    { name: "Chenge", balance: 870 },
    { name: "Dumbu", balance: 530 },

];

router.get('/players', async (req, res) => {
    res.send(players)
});

module.exports = router;