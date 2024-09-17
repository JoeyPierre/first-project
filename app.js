// Initial Player dice
const playerOneRolled = [];
const playerTwoRolled = [];
let playerOneScore = null;
let playerTwoScore = null;
let playerOneTurn = false;
let playerTwoTurn = false;

function playerOneRoll() {
  if (playerOneTurn) return; // Prevent player from rolling if already have a valid roll for the round

  const firstRandomNum = Math.floor(Math.random() * 6) + 1;
  const firstDiceImage = "./assets/dice" + firstRandomNum + ".png";
  document.querySelector("#first").setAttribute("src", firstDiceImage);

  const secondRandomNum = Math.floor(Math.random() * 6) + 1;
  const secondDiceImage = "./assets/dice" + secondRandomNum + ".png";
  document.querySelector("#second").setAttribute("src", secondDiceImage);

  const thirdRandomNum = Math.floor(Math.random() * 6) + 1;
  const thirdDiceImage = "./assets/dice" + thirdRandomNum + ".png";
  document.querySelector("#third").setAttribute("src", thirdDiceImage);

  playerOneRolled.length = 0; // empties array
  playerOneRolled.push(firstRandomNum, secondRandomNum, thirdRandomNum); // sets dice rolls into array
}

function playerTwoRoll() {
  const fourthRandomNum = Math.floor(Math.random() * 6) + 1;
  const fourthDiceImage = "./assets/dice" + fourthRandomNum + ".png";
  document.querySelector("#four").setAttribute("src", fourthDiceImage);

  const fifthRandomNum = Math.floor(Math.random() * 6) + 1;
  const fifthDiceImage = "./assets/dice" + fifthRandomNum + ".png";
  document.querySelector("#five").setAttribute("src", fifthDiceImage);

  const sixthRandomNum = Math.floor(Math.random() * 6) + 1;
  const sixthDiceImage = "./assets/dice" + sixthRandomNum + ".png";
  document.querySelector("#six").setAttribute("src", sixthDiceImage);

  playerTwoRolled.length = 0; // empties array
  playerTwoRolled.push(fourthRandomNum, fifthRandomNum, sixthRandomNum);
}

playerOneRoll();
playerTwoRoll();

const playerOneDice = document.querySelectorAll(".playerOne");
const playerTwoDice = document.querySelectorAll(".playerTwo");

playerOneDice.forEach((die) => {
  die.addEventListener("click", () => {
    playerOneRoll();
    checkNumbersPlayerOne();
  });
});

playerTwoDice.forEach((die) => {
  die.addEventListener("click", () => {
    playerTwoRoll();
    checkNumbersPlayerTwo();
  });
});

// Function that finds the point for a pair and a single
const getThird = (arr) => {
  let results = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (results[currentNum] === undefined) {
      results[currentNum] = 1;
    } else {
      results[currentNum]++;
    }
  }

  console.log(results);

  for (let key in results) {
    if (results[key] === 1) {
      return parseInt(key);
    }
  }
};

function checkNumbersPlayerOne() {
  if (
    playerOneRolled.includes(1) &&
    playerOneRolled.includes(2) &&
    playerOneRolled.includes(3)
  ) {
    // Document.querySelector("h1").innerHTML = "Player 1 Aced Out";
    playerOneScore = 0;
  } else if (
    playerOneRolled.includes(4) &&
    playerOneRolled.includes(5) &&
    playerOneRolled.includes(6)
  ) {
    // Document.querySelector("h1").innerHTML = "Cee Low Dice Player 1";
    playerOneScore = 13;
  } else if (
    playerOneRolled[0] === playerOneRolled[1] &&
    playerOneRolled[1] === playerOneRolled[2]
  ) {
    // return (playerOneRolled[] = playerOnesPiont);
    // Document.querySelector("h1").innerHTML = "Player 1 Rolled Tripple " + [0];
    playerOneScore = playerOneRolled[0] + 6;
  } else if (
    playerOneRolled[0] === playerOneRolled[1] ||
    playerOneRolled[1] === playerOneRolled[2] ||
    playerOneRolled[0] === playerOneRolled[2]
  ) {
    let result = getThird(playerOneRolled);
    playerOneScore = result;
  }

  if (playerOneScore !== null) {
    playerOneTurn = true;
  }
}

function checkNumbersPlayerTwo() {
  if (
    playerTwoRolled.includes(1) &&
    playerTwoRolled.includes(2) &&
    playerTwoRolled.includes(3)
  ) {
    // Document.querySelector("h1").innerHTML = "Player 1 Aced Out";
    playerTwoScore = 0;
  } else if (
    playerTwoRolled.includes(4) &&
    playerTwoRolled.includes(5) &&
    playerTwoRolled.includes(6)
  ) {
    // Document.querySelector("h1").innerHTML = "Cee Low Dice Player 1";
    playerTwoScore = 13;
  } else if (
    playerTwoRolled[0] === playerTwoRolled[1] &&
    playerTwoRolled[1] === playerTwoRolled[2]
  ) {
    // return (playerOneRolled[] = playerOnesPiont);
    // Document.querySelector("h1").innerHTML = "Player 1 Rolled Tripple " + [0];
    playerTwoScore = playerTwoRolled[0] + 6;
  } else if (
    playerTwoRolled[0] === playerTwoRolled[1] ||
    playerTwoRolled[1] === playerTwoRolled[2] ||
    playerTwoRolled[0] === playerTwoRolled[2]
  ) {
    let result = getThird(playerTwoRolled);
    playerTwoScore = result;
  }

  if (playerTwoScore !== null) {
    playerTwoTurn = true;
  }
}
//if (playerOneScore > playerTwoScore) {
//Document.querySelector("h1").innerHTML = "Player 1 Gets Paid";
//} else if (playerOneScore < playerTwoScore) {
//document.querySelector("h1").innerHTML = "Player 2 Gets Paid";
//} else document.querySelector("h1").innerHTML = "No One Gets Paid";
