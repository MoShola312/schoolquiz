var test = [
  {
    question: "What year did the great depression begin?",
    option1: "1912",
    option2: "1905",
    option3: "1929",
    correct: "1929"
  },
  {
    question: "What is the largest city in the USA?",
    option1: "Chicago",
    option2: "New York",
    option3: "Los Angeles",
    correct: "New York"
  },
  {
    question: "What is the largest ocean?",
    option1: "Pacific",
    option2: "Indian",
    option3: "Arctic",
    correct: "Pacific"
  },
{
  question: "What is the largest planet in our galaxy?",
  option1: "Saturn",
  option2: "Mars",
  option3: "Jupiter",
  correct: "Jupiter"

}
]
  var currentQuestion = 0;
  var score = 0;


  var button = document.querySelector("#button");
  var input = document.getElementsByName('t');


  //get the value of the selected button


button.addEventListener("click", function(){
for(var i=0; i<input.length; i++){
    //check to see what radio button is selected
  if(input[i].checked){
    console.log(input[i].checked);
    console.log(input[i].value);
    console.log("i " + i)
    console.log("test " + test[currentQuestion].correct);
      //get the value of the selected button
      //compare the the value with the answer array
    if(input[i].value == test[currentQuestion].correct){
     // alert("correct")
     //increment score
     score++
     document.querySelector("#yourScore").innerHTML=("Good job! your score is " + score)
   } else{
     //if wrong tell them they are wrong
     // alert("wrong")
     document.querySelector("#yourScore").innerHTML=("Ewwk! your score is " + score)
   }
   currentQuestion++;
   input[i].checked = false;

   //ENDS THE GAME
   if(currentQuestion > 3){
     button.style.visibility = "hidden";
     document.querySelector("#yourScore").innerHTML=("Game over! Your total is " + score)
     return;
   }
   //update to the next question
   loadQuestion(currentQuestion);

  }
}
console.log("score " + score)
console.log("currentQuestion " + currentQuestion)

})
//load the first question
loadQuestion(currentQuestion);

function loadQuestion(currentQuestion){
  document.querySelector("#questionTitle").textContent = test[currentQuestion].question
  document.querySelector("#Q1").setAttribute("value", test[currentQuestion].option1)
  document.querySelector("#one").textContent = test[currentQuestion].option1
  document.querySelector("#Q2").setAttribute("value", test[currentQuestion].option2)
 document.querySelector("#two").textContent = test[currentQuestion].option2
 document.querySelector("#Q3").setAttribute("value", test[currentQuestion].option3)
 document.querySelector("#three").textContent = test[currentQuestion].option3

}
