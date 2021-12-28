
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerName = "Mike"
let playerChips = 145;
let playerEl = document.getElementById("player-el");
playerEl.textContent = playerName + "$" + playerChips;


function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    runGame();
}


function runGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = 'Do you want to draw a new card?'
     } else if (sum === 21){
        message = "Blackjack!"
        hasBlackJack = true
     } else {
        message = 'You lose'
        isAlive = false
    }
    
    messageEl.textContent= message;
}


function randomNumber(){
    let randomNum = Math.floor(Math.random() *13) + 1; 
    if (randomNum > 10){
        return 10;
    } else if ( randomNum === 1){
        return 11;
    } else {
        return randomNum;
    }
}



function newCard () {
    if (isAlive === true && hasBlackJack === false){
        let nextCard = randomNumber();
        sum += nextCard;
        cards.push(nextCard);
        runGame();
        console.log("NEW CARD");
    }
}



