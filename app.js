console.log('working');

//add click event listener for each squares on the board
//when square is clicked, add an X to that square
//select all squares on the board
let squares = document.getElementsByTagName('td');
console.log(squares);

function initialize() {
  //wipe off board
}


//define diagonal variables on the DOM
//top left to bottom right diagonals
let case1 = document.getElementById('case 1').innerHTML;
let case5 = document.getElementById('case 5').innerHTML;
let case9 = document.getElementById('case 9').innerHTML;
//bottom left to top right diagonal
let case7 = document.getElementById('case 7').innerHTML;
let case3 = document.getElementById('case 3').innerHTML;
//other cases
let case2 = document.getElementById('case 2').innerHTML;
let case4 = document.getElementById('case 4').innerHTML;
let case6 = document.getElementById('case 6').innerHTML;
let case8 = document.getElementById('case 8').innerHTML;
//horizontal cases
let horizontal1 = [case1, case2, case3];
let horizontal2 = [case4, case5, case6];
let horizontal3 = [case7, case8, case9];
//vertical cases
let vertical1 = [case1, case4, case7];
let vertical2 = [case2, case5, case8];
let vertical3 = [case3, case6, case9];
//check for diagonal wins
function checkDiagonals() {
  if (case1 === 'X' && case5 === 'X' && case9 === 'X') {
    console.log('Player X has 3 in a row');
    return true;
  } else if (case1 === 'O' && case5 === 'O' && case9 === 'O') {
    console.log('Player O has 3 in a row');
    return true;
  } else if (case7 === 'X' && case5 === 'X' && case3 === 'X') {
    console.log('Player X has 3 in a row');
    return true;
  } else if (case7 === 'O' && case5 === 'O' && case3 === 'O') {
    console.log('Player O has 3 in a row');
    return true;
  } else {
    return false;
  }
}

function checkHorizontals() {
  if (JSON.stringify(horizontal1) === JSON.stringify(["X", "X", "X"])) {
    console.log('Player X has 3 in a row');
    return true;
  } else if (JSON.stringify(horizontal1) === JSON.stringify(["O", "O", "O"])) {
    console.log('Player O has 3 in a row');
    return true;
  } else if (JSON.stringify(horizontal2) === JSON.stringify(["X", "X", "X"])) {
    console.log('Player X has 3 in a row');
    return true;
  } else if (JSON.stringify(horizontal2) === JSON.stringify(["O", "O", "O"])) {
    console.log('Player O has 3 in a row');
    return true;
  } else if (JSON.stringify(horizontal3) === JSON.stringify(["X", "X", "X"])) {
    console.log('Player X has 3 in a row');
  } else if (JSON.stringify(horizontal3) === JSON.stringify(["O", "O", "O"])) {
    console.log('Player O has 3 in a row');
  }
}

function checkVerticals() {
  if (JSON.stringify(vertical1) === JSON.stringify(["X", "X", "X"])) {
    console.log('Player X has 3 in a row');
  } else if (JSON.stringify(vertical1) === JSON.stringify(["O", "O", "O"])) {
    console.log('Player O has 3 in a row');
  } else if (JSON.stringify(vertical2) === JSON.stringify(["X", "X", "X"])) {
    console.log('Player X has 3 in a row');
  } else if (JSON.stringify(vertical2) === JSON.stringify(["O", "O", "O"])) {
    console.log('Player O has 3 in a row');
  } else if (JSON.stringify(vertical3) === JSON.stringify(["X", "X", "X"])) {
    console.log('Player X has 3 in a row');
  } else if (JSON.stringify(vertical3) === JSON.stringify(["O", "O", "O"])) {
    console.log('Player O has 3 in a row');
  }
}

//create a variable that keeps track of which player's turn is next.
//use a number to track turn
let player_one = 1;
//define a function displayInput to be used as an onclick event in each square in the html file
function displayInput(square) {
  //if player one is 1
  if (player_one === 1) {
    //if square is not occupied
    if(document.getElementById(square).innerHTML === "") {
      //mark square with X
      document.getElementById(square).innerHTML = "X";
    } else {
      return;
    }
    //switch to next player's turn
    player_one = 0;
  //otherwise, if player is 0
  } else {
    //if square is not occupied
    if(document.getElementById(square).innerHTML === "") {
    //mark square with O
    document.getElementById(square).innerHTML = "O";
  }
    //switch to next player's turn
    player_one = 1;
  }
}

    //check for horizontal wins
    //check for vertical wins







