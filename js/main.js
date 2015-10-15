console.log("JAVASCRIPT Loaded!");

var questions = [{
    question: "Who is JavaScript officially managed by?",
    choices: ["Mozilla", "Microsoft", "Apple", "Sun Microsystems"],
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
    choices: ["Mozilla", "Safari", "Mosaic", "Web Explorer"],
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
var currentQuestion;

var $quiz = $('#quiz');
var $score = $('#score');
var $answer1 = $('#answer1');
var $answer2 = $('#answer2');
var $answer3 = $('#answer3');
var $answer4 = $('#answer4');

$answersButtons = [$answer1, $answer2, $answer3, $answer4];


$(".answerButton").click(response);


render();

function response(evt) {
  var choice = parseInt(this.id.substr(this.id.length - 1)) - 1;
  if (choice === questions[questionCounter].correctAnswer) {
    score++;
  } else {
    alert("Wrong Answer");
  }


  // console.log("Answer" + questions[questionCounter].choices[response]);
  // console.log(response == questions[questionCounter].correctAnswer ? "Correct" : "Incorrect")
  // if (currentQuestion.correctAnswer == evt.target.dataset.index) {
  //   alert("Correct Answer");
  // }


  if (questionCounter < questions.length - 1) {
    questionCounter++;
    render();
  } else {
    // Last question:
    $score.html(score.toString() + " OUT OF " + questions.length + " CORRECT");
    alert("You're finished! Your score was: " + score)
    $quiz.text("");
    $('ul').hide();
    $restartButton = $("<button>Restart Game</button>");
    $restartButton.on("click", function() {
      questionCounter = 0;
      score = 0;
      $('ul').show();
      render();
    })
    $quiz.append($restartButton);
    // Remove the last question
    // Display a screen that allows them to restart.
  }
}

function render() {
  currentQuestion = questions[questionCounter];
  $quiz.html(currentQuestion.question);
  $score.html(score.toString() + " OUT OF " + questions.length + " CORRECT");

  for (i = 0; i < currentQuestion.choices.length; i++) {
    var currentAnswer = currentQuestion.choices[i];
    console.log(currentAnswer)
    $answersButtons[i].html(currentAnswer);
  }
}






 













