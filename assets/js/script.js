// Basic elements
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswer = true;
var score = 0;
var questionCounter = 0;
var availiableQuestions = [];
var timerElement = document.querySelector(".timer")
var timerCount = 60;

//Main questions
var questions = [
    {
        question: 'What does API stand for ?',
        choice1: 'Academic Performance Index',
        choice2: 'Active Pharmaceutical Ingredient',
        choice3: 'Average Performance Intelligance',
        choice4: 'Application Programming Interface',
        answer: 4,
    },
    {
        question:
            "Who invented Javascript ?",
        choice1: "Brendan Eich",
        choice2: "Thomas Eddison",
        choice3: "Abraham Lincoln",
        choice4: "Sun Tzu",
        answer: 1,
    },
    {
        question: "What does CSS stand for ?",
        choice1: "Clinical Service Specalist",
        choice2: "Counter Strike Source",
        choice3: "Cascading Style Sheets",
        choice4: "Combat Service Support",
        answer: 3,
    },
    {
        question: "What is Boolean ?",
        choice1: "Something a coding wizard made up in the 8th century",
        choice2: "A binary variable indicating true or false",
        choice3: "A hidden boo in Luigi's Mansion",
        choice4: "IDK too lazy to write this quiz :)",
        answer: 2,
    },
];
// more constants
const correctBonus = 5;
const MaxQuestions = 4;

//When starting game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availiableQuestions = [...questions];
    console.log(availiableQuestions);
    setTime();
    getNewQuestion();
};

// Receving a question
getNewQuestion = () => {
    if (availiableQuestions.length === 0 || questionCounter >= MaxQuestions) {
        // move to end of page
        return window.location.assign('/end.html')
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availiableQuestions.length);
        currentQuestion =  availiableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
    var answer = currentQuestion.answer
        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });

            availiableQuestions.splice(questionIndex, 1);

            acceptingAnswer = true; 
        };

        choices.forEach(choice=> {
          
                choice.addEventListener("click", e => {
                    
                console.log(e.target.dataset.number)
                if(!acceptingAnswer) timerCount;
                //if(e.target.dataset.number === currentQuestion)
            
                acceptingAnswer = false;
                
                getNewQuestion();
            })
        });

    // Create timer function

    function setTime() {
        var timeInterval = setInterval(function() {
            //console.log(timerCount);
            timerCount--;
            timerElement.textContent = timerCount + " seconds left! ";
          
            if(acceptingAnswer = false)
            if(timerCount === 0) {
                clearInterval(timeInterval);
                gameOver();
            };
        }, 1000);
    }

    //Function to create game over message
    function gameOver() {
        timeEl.textContent = " ";
        var gameOverMessage = document.textContent('Game Over! Try Again? ')
    }
startGame();

// Saving High Scores on a local storage

var userName = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var highScore = JSON.parse(localStorage.getItem('highScores')) || [];

var MaxHighScore = 60;

finalScore.innerText = mostRecentScore;

userName.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !userName.ariaValueMax;

});

saveHighScore = (e) => {
    e.preventDefault();

    var score = {
    score: mostRecentScore,
    name: userName.ariaValueMax,
    };

    highScore.push(score);
    highScore.sort((a,b) => b.score - a.score);
    highScore.splices(5);

    localStorage.setItem('highScores', JSON.stringify(highScore));
    window.location.assign('/')
};