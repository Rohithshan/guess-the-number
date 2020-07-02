// Variable to store the list of guesses 
let guesses = [];
let flag = 0;
document.addEventListener('keypress', doc_keyPress);
// Variable for store the correct random number 


let correctNumber = getRandomNumber();
console.log(correctNumber);

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    document.getElementById('number-guess').focus();
    document.getElementById('number-guess').select();
    getRandomNumber();
}

/**
 * Functionality for playing the whole game
 */

function doc_keyPress(event) {
  if(event.keyCode === 13) {
    let emptcode = `<input id="number-guess" class="form-group form-control form-control-lg" type="number" placeholder="Type your guess here...">`;
    document.getElementById('number-guess').innerHTML = emptcode;
    playGame();
  }
}


function playGame(){
  if(flag == 0) {
    // *CODE GOES BELOW HERE *
    let numberGuess = document.getElementById("number-guess").value;
    if(numberGuess != '') {
      displayResult(numberGuess);
      saveGuessHistory(numberGuess);
      displayHistory();
      let emptcode = `<input id="number-guess" class="form-group form-control form-control-lg" type="number" placeholder="Type your guess here...">`;
      document.getElementById('input-guess').innerHTML = emptcode;
      document.getElementById('number-guess').focus();
      document.getElementById('number-guess').select();    
    } 
  }
  
}


function removeNumber() {
  let code = ` <input id="number-guess" class="form-group form-control form-control-lg" type="number" placeholder="Type your guess here...">`;
                

  document.getElementById('input-guess').innerHTML = code; 
  document.getElementById('number-guess').focus();
  document.getElementById('number-guess').select();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *

function displayResult(numberGuess) {
  if(numberGuess > correctNumber) {
    // console.log("too high");
    showNumberAbove();

  }else if(numberGuess < correctNumber){
    // console.log("too low");
    showNumberBelow();

  }else{
    // console.log("you win..");
    showYouWon();
  }
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  flag = 0;
  // *CODE GOES BELOW HERE *
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
  document.getElementById("history").innerHTML = "";
  removeNumber();

}

/*
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  let randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
  // *CODE GOES BELOW HERE *
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
  // console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let list = `<div id='borderimg'>
                <h5 style="color: red;">Guess history</h5>
              <ul class='list-group'>`;
  let index = guesses.length - 1;
  let count = 0;
  // *CODE GOES BELOW HERE *
  while(index >= 0) {
  list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>";
  index -= 1;
  count++;
  }
  list += "</ul></div>"; 
  document.getElementById("history").innerHTML = list;


}

/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon(){
  flag = 1;
  const text = `Awesome job, you got it in ${guesses.length + 1} tries!`;
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won', text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
  
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning', text);

  document.getElementById("result").innerHTML = dialog;
}
