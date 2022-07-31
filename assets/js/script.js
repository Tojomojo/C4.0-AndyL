// Basic elements
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswer = true;
var score = 0;
var questionCounter = 0;
var availiableQuestions = [];

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

        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });

            availiableQuestions.splice(questionIndex, 1);

            acceptingAnswer = true; 
        };

        choices.forEach(choice => {
            choice.addEventListener("click", e => {
                if(!acceptingAnswer) return;

                acceptingAnswer = false;
                const selectedChoice = e.target;
                const selectedAnswer = selectedChoice.dataset["number"];
                console.log(selectedAnswer);
                getNewQuestion();
            })
        });

startGame();