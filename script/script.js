const htmlData = [
    {
        icon: "assets/images/icon-html.svg",
        numQuestion: 1,
        question: "What does HTML stands for?",
        alternatives: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
        correct: 2,
    },
    {
        icon: "assets/images/icon-html.svg",
        numQuestion: 2,
        question: "Which of the following is the correct structure for an HTML document?",
        alternatives: ["<html><head></head><body></body></html>", "<head><html></html><body></body></head>", "<body><head></head><html></html></body>", "<html><body></body><head></head></html>"],
        correct: 0,
    },
    {
        icon: "assets/images/icon-html.svg",
        numQuestion: 3,
        question: "Which HTML element is used to define the title of a document?",
        alternatives: ["<head>", "<title>", "<header>", "<top>"],
        correct: 1,
    },
    {
        icon: "assets/images/icon-html.svg",
        numQuestion: 4,
        question: "What is the purpose of the <body> tag in HTML?",
        alternatives: ["It defines the document's head section.", "It contains all the content such as text, images, and links.", "It is used to define the main content of an HTML document.", "It specifies the body of the email content in HTML."],
        correct: 1,
    },
    {
        icon: "assets/images/icon-html.svg",
        numQuestion: 5,
        question: "Which HTML tag is used to create a hyperlink?",
        alternatives: ["<hyperlink>", "<link>", "<a>", "<href>"],
        correct: 2,
    },
    {
        icon: "assets/images/icon-html.svg",
        numQuestion: 6,
        question: "Which tag is used to display images in HTML?",
        alternatives: ["<img>", "<image>", "<src>", "<pic>"],
        correct: 0,
    },
];

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

let score = 0;
let currentQuestion = 0;
let selectedAnswerIndex = null;

const htmlButton = document.querySelector('.quiz-button-html');
htmlButton.addEventListener('click', function htmlLoadQuiz() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const icon = document.createElement('img');
    icon.className = 'icon-img';
    icon.src = htmlData[currentQuestion].icon;
    icon.alt = 'html-icon';
    container.appendChild(icon);

    const numberQuestion = document.createElement('span');
    numberQuestion.className = 'number-question';
    numberQuestion.innerHTML = `<span>Question ${htmlData[currentQuestion].numQuestion} of 6`;
    container.appendChild(numberQuestion);

    const quizContainer = document.createElement('div');
    quizContainer.className = 'section-quiz';
    quizContainer.innerHTML = `<h2>${htmlData[currentQuestion].question}</h2>`;
    container.appendChild(quizContainer);

    // Loop para criar os botões de alternativas
    htmlData[currentQuestion].alternatives.forEach((alternative, index) => {
        const buttonAlternative = document.createElement('button');
        buttonAlternative.className = 'button-answers';
        buttonAlternative.textContent = alternative;

        // Adiciona o evento de clique para selecionar a resposta
        buttonAlternative.addEventListener('click', function () {
            selectedAnswerIndex = index;

            // Remove a classe de seleção de todos os botões e adiciona ao selecionado
            const allButtons = document.querySelectorAll('.button-answers');
            allButtons.forEach(button => {
                button.classList.remove('selected');
                button.style.border = ''; // Reseta as bordas
            });
            buttonAlternative.classList.add('selected');
            buttonAlternative.style.border = '2px solid blue'; // Destaca o botão selecionado
        });

        container.appendChild(buttonAlternative);
    });

    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    nextButton.textContent = 'Next';
    container.appendChild(nextButton);

    // Adiciona evento de clique para o botão "Next"
    nextButton.addEventListener('click', function () {
        if (selectedAnswerIndex === null) {
            alert('Please select an answer');
            return;
        }

        // Mostra a resposta correta e incorreta
        const allButtons = document.querySelectorAll('.button-answers');
        allButtons.forEach((button, index) => {
            if (index === htmlData[currentQuestion].correct) {
                button.style.border = '2px solid green'; // Resposta correta
            } else {
                button.style.border = '2px solid red'; // Resposta incorreta
            }
        });

        // Incrementa a pontuação se a resposta estiver correta
        if (selectedAnswerIndex === htmlData[currentQuestion].correct) {
            score++;
        }

        // Desativa o botão "Next" até passar para a próxima pergunta
        nextButton.disabled = true;

        // Timeout para exibir a resposta e passar para a próxima pergunta
        setTimeout(function () {
            selectedAnswerIndex = null;
            nextButton.disabled = false;
            currentQuestion++;

            if (currentQuestion < htmlData.length) {
                htmlLoadQuiz(); // Carrega a próxima pergunta
            } else {
                container.innerHTML = `<p>Quiz completo! Pontuação: ${score}/${htmlData.length}</p>`;
            }
        }, 2000); // 2 segundos de delay antes de ir para a próxima pergunta
    });
});

const cssQuizButton = document.querySelector('.quiz-button-css');
cssQuizButton.addEventListener('click', function cssLoadQuiz() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const cssIcon = document.createElement('img');
    cssIcon.className = 'css-icon';
    cssIcon.src = cssData[currentQuestion].icon;
    cssIcon.alt = 'css-icon';
    container.appendChild(cssIcon);

    const numQuestion = document.createElement('span');
    numQuestion.className = 'number-question';
    numQuestion.innerHTML = `<span>Question ${cssData[currentQuestion].numQuestion} of 6</span>`;
    container.appendChild(numQuestion);

    const cssContainer = document.createElement('div');
    cssContainer.className = 'css-container';
    cssContainer.innerHTML = `<h2>${cssData[currentQuestion].question}</h2>`;
    container.appendChild(cssContainer);

    cssData[currentQuestion].alternatives.forEach(alternatives => {
        const buttonAlternative = document.createElement('button');
        buttonAlternative.className = 'button-answers';
        buttonAlternative.textContent = alternatives;
        container.appendChild(buttonAlternative);
    });

    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    nextButton.textContent = 'Next';
    container.appendChild(nextButton);

    nextButton.addEventListener('click', function() {

    });
});