const cssData = [
    {
        icon: "assets/images/icon-css.svg",
        numQuestion: 1,
        question: "What does CSS stand for?",
        alternatives: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
        correct: 2,
    },
    {
        icon: "assets/images/icon-css.svg",
        numQuestion: 2,
        question: "Which HTML attribute is used to define inline styles?",
        alternatives: ["styles", "style", "class", "font-style"],
        correct: 1,
    },
    {
        icon: "assets/images/icon-css.svg",
        numQuestion: 3,
        question: "How do you insert a comment in a CSS file?",
        alternatives: ["// this is a comment //", "/* this is a comment */", "-- this is a comment --", "<!-- this is a comment -->"],
        correct: 1,
    },
    {
        icon: "assets/images/icon-css.svg",
        numQuestion: 4,
        question: "Which property is used to change the background color of an element?",
        alternatives: ["color", "bgcolor", "background-color", "background"],
        correct: 2,
    },
    {
        icon: "assets/images/icon-css.svg",
        numQuestion: 5,
        question: "How do you apply a style to all <p> elements?",
        alternatives: ["p { }", ".p { }", "#p { }", "all.p { }"],
        correct: 0,
    },
    {
        icon: "assets/images/icon-css.svg",
        numQuestion: 6,
        question: "Which property is used to change the font of an element?",
        alternatives: ["font-style", "text-style", "font-family", "typeface"],
        correct: 2,
    },
];

let cssScore = 0;
let cssCurrentQuestion = 0;
let cssSelectedAnswerIndex = null;

const cssQuizButton = document.querySelector('.quiz-button-css');
cssQuizButton.addEventListener('click', function cssLoadQuiz() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const cssIcon = document.createElement('img');
    cssIcon.className = 'css-icon';
    cssIcon.src = cssData[cssCurrentQuestion].icon;
    cssIcon.alt = 'css-icon';
    container.appendChild(cssIcon);

    const numQuestion = document.createElement('span');
    numQuestion.className = 'number-question';
    numQuestion.innerHTML = `<span>Question ${cssData[cssCurrentQuestion].numQuestion} of 6</span>`;
    container.appendChild(numQuestion);

    const cssContainer = document.createElement('div');
    cssContainer.className = 'css-container';
    cssContainer.innerHTML = `<h2>${cssData[cssCurrentQuestion].question}</h2>`;
    container.appendChild(cssContainer);

    cssData[cssCurrentQuestion].alternatives.forEach((alternatives, index) => {
        const buttonAlternative = document.createElement('button');
        buttonAlternative.className = 'button-answers';
        buttonAlternative.textContent = alternatives;

        buttonAlternative.addEventListener('click', function () {
            cssSelectedAnswerIndex = index;
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

        if (cssSelectedAnswerIndex === null) {
            alert('Please select an answer');
            return;
        };

        const allButtons = document.querySelectorAll('.button-answers');
        allButtons.forEach((button, index) => {
            if (index === cssData[cssCurrentQuestion].correct) {
                button.style.border = '2px solid blue'; // Resposta correta
            } else {
                button.style.border = '2px solid red'; // Resposta incorreta
            };
        });

        if (cssSelectedAnswerIndex === cssData[cssCurrentQuestion].correct) {
            cssScore++;
        };

        nextButton.disabled = true;

        setTimeout(function () {
            nextButton.disabled = false;
            cssSelectedAnswerIndex = null;
            cssCurrentQuestion++;
            if (cssCurrentQuestion < cssData.length) {
                cssLoadQuiz();
            } else {
                container.innerHTML = `<p>Quiz completo! Pontuação: ${cssScore}/${cssData.length}</p>`;
            };
        }, 2000)
    });
});
