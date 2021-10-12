const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scisor = document.querySelector('#scisor');
const startGame = document.querySelector('#start');
const computerChhosen = document.querySelector('.computerChoice');
const userPoints = document.querySelector('.userpoints');
const machinePoints = document.querySelector('.computerpoints');
const result = document.querySelector('.win');
//computer selection
function computerPlay() {
  let textArray = [
    'rock',
    'paper',
    'scisor'
  ];
  let randomNumber = textArray[Math.floor(Math.random() * textArray.length)];
  return randomNumber;
}



let computerSelection;
let computerPoints = 0;
let playerPoints = 0;
let count = 10;



//playround
function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints++;
    machinePoints.innerHTML = computerPoints;
  }

  else if (playerSelection === "paper" && computerSelection === "rock") {

    playerPoints++;
    userPoints.innerHTML = playerPoints;
  }
  else if (playerSelection === "scisor" && computerSelection === "paper") {
    playerPoints++;
    userPoints.innerHTML = playerPoints;
  }
  else if (playerSelection === "paper" && computerSelection === "scisor") {

    computerPoints++;
    machinePoints.innerHTML = computerPoints;
  }
  else if (playerSelection === "scisor" && computerSelection === "rock") {

    playerPoints++;
    userPoints.innerHTML = playerPoints;
  }
  else if (playerSelection === "rock" && computerSelection === "scisor") {

    computerPoints++;
    machinePoints.innerHTML = computerPoints;
  }
  count--;

  console.log("playerpoints " + playerPoints);
  console.log("computerpoints " + computerPoints);

  if (count <= 0) {
    winner();
    exitGame();
  }

}

function rockClick() {
  playerSelection = "rock";
  computerSelection = computerPlay();
  computerChhosen.innerHTML = computerSelection;
  //  console.log("Player " + playerSelection + " computer " + computerSelection);

  playRound(playerSelection, computerSelection);
}

function paperClick() {
  playerSelection = "paper";
  computerSelection = computerPlay();
  computerChhosen.innerHTML = computerSelection;
  // console.log("Player " + playerSelection + " computer " + computerSelection);
  playRound(playerSelection, computerSelection);
}

function scisorClick() {
  playerSelection = "scisor";
  computerSelection = computerPlay();
  computerChhosen.innerHTML = computerSelection;
  // console.log("Player " + playerSelection + " computer " + computerSelection);
  playRound(playerSelection, computerSelection);
}

function winner() {
  if (playerPoints > computerPoints) {
    //console.log("player win");
    result.innerHTML = "Hurrey !! you win computer lost" ;
  }
  else if (playerPoints < computerPoints) {
    //console.log("computer win");
    result.innerHTML = "oops !! you lost computer win" ;
  }
  else
  result.innerHTML = "well played both of you" ;
}

function exitGame() {
  rock.disabled = true;
  paper.disabled = true;
  scisor.disabled = true;
}



function game() {
  rock.disabled = false;
  paper.disabled = false;
  scisor.disabled = false;
  count = 10;
  playerPoints = 0;
  computerPoints = 0;
  userPoints.innerHTML = playerPoints;
  machinePoints.innerHTML = computerPoints;
  computerChhosen.innerHTML = 'you play first';
  rock.addEventListener('click', rockClick);
  paper.addEventListener('click', paperClick);
  scisor.addEventListener('click', scisorClick);

  //console.log("playerselection" + playerSelection);
  //console.log("computer"+ computerSelection);


}

startGame.addEventListener('click', game);
