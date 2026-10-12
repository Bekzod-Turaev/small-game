let scoreZero = document.getElementById("current--0");
let scoreOme  =document.querySelector("#score--0")
let currenr0El =document.querySelector("#score--1")
let currenr1El =document.querySelector("#current--1")
let btnNew =document.querySelector(".btn--new")
let btnRoll =document.querySelector(".btn--roll")
let btnHold =document.querySelector(".btn--hold")
let player0El =document.querySelector(".player--0")
let player1El =document.querySelector(".player--1")
let dice =document.querySelector(".dice")
let scoreONE = document.querySelector("score--1")

"use strict"

let playing, score, currentScore, activePlayer

const init= () =>{
    playing = true
    score= [0, 0]
    currentScore = 0
    activePlayer = 0

    scoreZero.textContent = 0
    scoreOme.textContent = 0
    currenr0El.textContent = 0
    currenr1El.textContent = 0

    dice.classList.add("hidden")
    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
    player0El.classList.add("player--active")
    player1El.classList.remove("player--active")
}

init();

const switchPlayer = () =>{
    currentScore = 0
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1:0
    console.log(activePlayer);
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
    
}

btnRoll.addEventListener("click", () =>{
    if(playing){
        let diceEl = Math.trunc(Math.random() * 6) +1;
        dice.classList.remove("hidden")
        dice.src = `dice-${diceEl}.png`
        if(diceEl !==1){
            currentScore +=diceEl
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        } else{
            switchPlayer()
        }
    }
})

btnHold.addEventListener("click", ()=>{
    if(playing){
        score[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

        if(score[activePlayer]>= 50){
            playing = false
            dice.classList.add("hidden")
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            document.querySelector(`#current--${activePlayer}`).textContent = 0
        }else{
            switchPlayer()
        }
    }
})

btnNew.addEventListener("click", init);






