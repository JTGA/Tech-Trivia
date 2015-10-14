console.log("JAVASCRIPT Loaded!");

var questions = [{
    question: "Who is JavaScript officially managed by?",
    choices: ["Mozilla", "Microsoft", "Apple", "Sun Microsystems", "Oracle"],
    correctAnswer: 0
  }, {
    question: "What is Error 404?",
    choices: ["Request Timeout", "Site not found in HTTP", "Bad File Request/Syntax Error", "Site Access Forbidden/Password Protected"],
    correctAnswer: 1
  }, {
    question: "Which if the following is correct?",
    choices: ["jQuery is a JSON library", "jQuery is a JavaScript library"],
    correctAnswer: 1
  }, {
    question: "Which sign does jQuery use as a shortcut?",
    choices: ["The % sign" , "The $ sign", "The ? sign", "The # sign"],
    correctAnswer: 1
  }, {
    question: "Which jQuery method is used to perform an asynchronous HTTP request?",
    choices: ["jQuery.ajaxAsync()", "jQuery.ajaxSetup()", "jQuery.ajax()"],
    correctAnswer: 2
  }, {
    question: "Which jQuery method returns the direct parent element of the selected element?",
    choices: ["ancestors()", "ancestor()", "parents()", "parent()"],
    correctAnswer: 3
  }, {
    question: "What was the name of the original Netscape Navigator?",
    choices: ["Mozilla", "Safari", "Gecko", "Mosaic", "Web Explorer"],
    correctAnswer: 0
  }, {
    question: "Which computer programming language was developed by Brendan Eich for Netscape in 1995?  Its intended purpose was to create or alter dynamic content in web browsers.",
    choices: ["ActionScript", "MaxScript", "PostScript", "JavaScript"],
    correctAnswer: 3
  }, {
    question: "Which is the correct CSS syntax?",
    choices: ["{body:color=black;}", "body {color: black;}", "{body;color:black;}", "body:color=black;"],
    correctAnswer: 1
  }, {
    question: "Is jQuery a library for client scripting or server scripting?",
    choices: ["Client Scripting", "Server Scripting"],
    correctAnswer: 0
  }];

var questionCounter = 0;
var selections = [];
var score = 0;

var $quiz = $('#quiz');
var $answer1 = $('#answer1');
var $answer2 = $('#answer2');
var $answer3 = $('#answer3');
var $answer4 = $('#answer4');
var $answer5 = $('#answer5');
var $answer6 = $('#answer6');

$answer1.on('click', response);
$answer2.on('click', response);
$answer3.on('click', response);
$answer4.on('click', response);
$answer5.on('click', response);
$answer6.on('click', response);

render();

function response(evt) {
  var choice = parseInt(this.id.substr(1)) - 1;
  console.log("Answer" + questions[questionCounter].choices[response]);
  console.log(response == questions[questionCounter].correctAnswer ? "Correct" : "Incorrect")

  if (questionCounter < questions.length - 1) {
    questionCounter++;
    render();
  } else {

  }
}

function render() {
  $quiz.html(questions[questionCounter].question);
}



 













