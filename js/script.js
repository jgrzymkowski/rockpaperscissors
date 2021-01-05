// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



$("#shoot").click(function() {
  let comp = Math.ceil(Math.random()*3);
  let computerChoice;
  console.log(comp);
  if(comp == 1) {
    computerChoice = "rock";
  } else if(comp == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  $("#computerChoice").text(computerChoice);
  

})