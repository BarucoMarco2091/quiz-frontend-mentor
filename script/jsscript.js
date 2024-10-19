const javascriptData = [
    {
        icon: "assets/images/icon-js.svg",
        numQuestion: 1,
        question: "Which syntax is correct to output 'Hello World' in an alert box?",
        alternatives: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
        correct: 2,
    },
    {
        icon: "assets/images/icon-js.svg",
        numQuestion: 2,
        question: "How do you call a function named 'myFunction'?",
        alternatives: ["call function myFunction()", "call myFunction()", "myFunction()", "execute myFunction()"],
        correct: 2,
    },
    {
        icon: "assets/images/icon-js.svg",
        numQuestion: 3,
        question: "How to write an IF statement in JavaScript?",
        alternatives: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
        correct: 1,
    },
    {
        icon: "assets/images/icon-js.svg",
        numQuestion: 4,
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        alternatives: ["if (i <> 5)", "if i =! 5 then", "if (i != 5)", "if i not = 5"],
        correct: 1,
    },
    {
        icon: "assets/images/icon-js.svg",
        numQuestion: 5,
        question: "How does a FOR loop start?",
        alternatives: ["for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)"],
        correct: 3,
    },
    {
        icon: "assets/images/icon-js.svg",
        numQuestion: 6,
        question: "What is the correct way to write a JavaScript array?",
        alternatives: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        correct: 1,
    },
];

let jsScore = 0;
let jsCurrentQuestion = 0;
let jsSelectedAnswerIndex = null;

const jsQuizButton = document.querySelector('.quiz-button-javascript');
jsQuizButton.addEventListener('click', function javascriptLoadQuiz() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const iconJavaScript = document.createElement('img');
    iconJavaScript.className = 'icon-javascript';
    iconJavaScript.src = javascriptData[jsCurrentQuestion].icon;
    container.appendChild(iconJavaScript);

    const numQuestion = document.createElement('span');
    numQuestion.className = 'number-question';
    numQuestion.innerHTML = `<span>Question ${javascriptData[jsCurrentQuestion].numQuestion} of 6`;
    container.appendChild(numQuestion);

    const jsQuestion = document.createElement('h2');
    jsQuestion.className = 'js-question';
    jsQuestion.innerHTML = `<h2>${javascriptData[jsCurrentQuestion].question}</h2>`;
    container.appendChild(jsQuestion);

    javascriptData[jsCurrentQuestion].alternatives.forEach((alternatives, index) => {
        const buttonAlternative = document.createElement('button');
        buttonAlternative.className = 'button-answers';
        buttonAlternative.textContent = alternatives;

        buttonAlternative.addEventListener('click', function () {
            jsSelectedAnswerIndex = index;
            const allButtons = document.querySelectorAll('.button-answers');
            allButtons.forEach(button => {
                button.classList.remove('selected');
                button.style.border = '';
            });
            buttonAlternative.classList.add('selected');
            buttonAlternative.style.border = '2px solid purple';
        });

        container.appendChild(buttonAlternative);
    });

    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    nextButton.textContent = 'Next';
    container.appendChild(nextButton);

    nextButton.addEventListener('click', function () {
        if (jsSelectedAnswerIndex === null) {
            alert('Please, select an answer');
            return;
        };

        if (jsSelectedAnswerIndex === javascriptData[jsCurrentQuestion].correct) {
            jsScore++
        };

        const allButtons = document.querySelectorAll('.button-answers');
        allButtons.forEach((button, index) => {
            if (index === javascriptData[jsCurrentQuestion].correct) {
                button.style.border = '2px solid green';
            } else {
                button.style.border = '2px solid red'
            };
        });

        nextButton.disabled = true;

        setTimeout(function () {
            jsSelectedAnswerIndex = null;
            nextButton.disabled = false;
            jsCurrentQuestion++;
            if (jsCurrentQuestion < javascriptData.length) {
                javascriptLoadQuiz();
            } else {
                container.innerHTML = `<p>Quiz completo! Pontuação: ${jsScore}/${javascriptData.length}</p>`;
            };
        }, 2000);
    });

});
