let suits = ['spades', 'hearts', 'clubs', 'diamonds'];
let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q'];
let deck = [];

function getDeck() {
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let card = {
                suit: suits[i],
                value: values[j]
            };
            deck.push(card);
        }
    }
};

getDeck();

console.log("the deck is: ", deck.length)