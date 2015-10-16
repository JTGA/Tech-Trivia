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
}, {
  question: "Is JavaScript case sensitive?",
  choices: ["Yes", "No"],
  correctAnswer: 0
}, {
  question: "Who invented the World Wide Web in 1989",
  choices: ["Ken Thompson", "Bill Gates", "Doug Englebart", "Tim Berners-Lee"],
  correctAnswer: 3
}, {
  question: "Who was the father of Hypertext?",
  choices: ["Larry Wall", "Linus Torvalds", "Ted Nelson", "Doug Englebart"],
  correctAnswer: 2
}, {
  question: "Who is the inventor of the C++ programming language?",
  choices: ["Phil Zimmermann", "Charles Goldfarb", "Ray Tomlinson", "Bjarne Stroustrup"],
  correctAnswer: 3
}, {
  question: "In what year was DOS created?",
  choices: ["1973", "1981", "1977", "1985"],
  correctAnswer: 1
}, {
  question: "What is the correct jQuery code to set the background color of all p elements to red?",
  choices: ['$("p").css("background-color","red”);', '$("p").layout("background-color","red”);', '$("p").manipulate("background-color","red”);', '$("p").style("background-color","red”);'], 
  correctAnswer: 0
}, {
  question: "Scripting and object-oriented programming language developed by John H. Thompson for use in Adobe Director",
  choices: ["ActionScript", "VBA", "Lingo", "Ruby"],
  correctAnswer: 2
}, {
  question: "Interpreted programming language for text processing and data extraction.  It is a standard feature of most Unix-like OS.",
  choices: ["AWK", "Ruby", "Miranda", "Python"],
  correctAnswer: 0
}, {
  question: "What is the most widespread logic programming language, desgined by Alain Colmerauer in 1972?",
  choices: ["Lingo", "Fortran", "Prolog", "Delphi"],
  correctAnswer: 2
}, {
  question: "What scripting language primarily used for web development was created by Rasmus Lerdorf in 1994?",
  choices: ["Ajax", "PHP", "JavaScript", "C++"],
  correctAnswer: 1
}
];

var questionCounter = 0;
var score = [0, 0];
var turn = 0;

var $quiz = $('#quiz');
var $score1 = $('#player1score');
var $score2 = $('#player2score');
var $answer1 = $('#answer1');
var $answer2 = $('#answer2');
var $answer3 = $('#answer3');
var $answer4 = $('#answer4');
var $restartButton = $('#resetBtn');

$answersButtons = [$answer1, $answer2, $answer3, $answer4];


$(".answerButton").click(response);


render();

function response(evt) {
  var choice = parseInt(this.id.substr(this.id.length - 1)) - 1;
  if (choice === questions[questionCounter].correctAnswer) {
    score[turn]++;
  }


  // console.log("Answer" + questions[questionCounter].choices[response]);
  // console.log(response == questions[questionCounter].correctAnswer ? "Correct" : "Incorrect")
  // if (currentQuestion.correctAnswer == evt.target.dataset.index) {
  //   alert("Correct Answer");
  // }


  if (questionCounter < questions.length - 1) {
    questionCounter++;
    turn = Math.abs(turn - 1);
    console.log(turn);
    render();
  } else {
    // Last question:
    // $score.html(score.toString() + " OUT OF " + questions.length + " CORRECT");
    var msg;
    if (score[0] > score[1]) {
      msg = "Congratulations Player 1!";
    } else if (score[1] > score[0]) {
      msg = "Congratulations Player 2!";
    } else {
      msg = "It's a Tie!";
    }
    alert(msg);
    $quiz.text("");
    $('ul').hide();
    $restartButton.show();
    // Remove the last question
    // Display a screen that allows them to restart.
  }
}

$restartButton.on("click", function() {
  questionCounter = 0;
  turn = 0;
  score = [0, 0];
  $('ul').show();
  render();
  $(this).hide();
})

function render() {
  var currentQuestion;
  currentQuestion = questions[questionCounter];
  $quiz.html(currentQuestion.question);

  // display current turn
  if (turn === 0) {
    $score1.addClass('currentTurn');
    $score2.removeClass('currentTurn');
  } else {
    $score2.addClass('currentTurn');
    $score1.removeClass('currentTurn');
  }

  $score1.html("Player 1<br>" + score[0].toString() + " OUT OF " + (questions.length/2) + " CORRECT");
  $score2.html("Player 2<br>" + score[1].toString() + " OUT OF " + (questions.length/2) + " CORRECT");

  for (i = 0; i < currentQuestion.choices.length; i++) {
    var currentAnswer = currentQuestion.choices[i];
    console.log(currentAnswer)
    $answersButtons[i].html(currentAnswer);
  }
}








