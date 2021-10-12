const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
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
    'scissor'
  ];
  let randomNumber = textArray[Math.floor(Math.random() * textArray.length)];
  return randomNumber;
}



let computerSelection;
let computerPoints = 0;
let playerPoints = 0;
let count = 8;



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
  else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerPoints++;
    userPoints.innerHTML = playerPoints;
  }
  else if (playerSelection === "paper" && computerSelection === "scissor") {

    computerPoints++;
    machinePoints.innerHTML = computerPoints;
  }
  else if (playerSelection === "scissor" && computerSelection === "rock") {

    playerPoints++;
    userPoints.innerHTML = playerPoints;
  }
  else if (playerSelection === "rock" && computerSelection === "scissor") {

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

function scissorClick() {
  playerSelection = "scissor";
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
  scissor.disabled = true;
}



function game() {
  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;
  count = 8;
  playerPoints = 0;
  computerPoints = 0;
  userPoints.innerHTML = playerPoints;
  machinePoints.innerHTML = computerPoints;
  computerChhosen.innerHTML = 'you play first';
  result.innerHTML = "match going";
  rock.addEventListener('click', rockClick);
  paper.addEventListener('click', paperClick);
  scissor.addEventListener('click', scissorClick);

  //console.log("playerselection" + playerSelection);
  //console.log("computer"+ computerSelection);


}

startGame.addEventListener('click', game);
