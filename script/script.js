const htmlData = [
    {
        question: "What does HTML stands for?",
        alternatives: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
        correct: 2,
    },
    {
        question: "Which of the following is the correct structure for an HTML document?",
        alternatives: ["<html><head></head><body></body></html>", "<head><html></html><body></body></head>", "<body><head></head><html></html></body>", "<html><body></body><head></head></html>"],
        correct: 0,
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        alternatives: ["<head>", "<title>", "<header>", "<top>"],
        correct: 1,
    },
    {
        question: "What is the purpose of the <body> tag in HTML?",
        alternatives: ["It defines the document's head section.", "It contains all the content such as text, images, and links.", "It is used to define the main content of an HTML document.", "It specifies the body of the email content in HTML."],
        correct: 1,
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        alternatives: ["<hyperlink>", "<link>", "<a>", "<href>"],
        correct: 2,
    },
    {
        question: "Which tag is used to display images in HTML?",
        alternatives: ["<img>", "<image>", "<src>", "<pic>"],
        correct: 0,
    },
];

const cssData = [
    {
        question: "What does CSS stand for?",
        alternatives: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
        correct: 2,
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        alternatives: ["styles", "style", "class", "font-style"],
        correct: 1,
    },
    {
        question: "How do you insert a comment in a CSS file?",
        alternatives: ["// this is a comment //", "/* this is a comment */", "-- this is a comment --", "<!-- this is a comment -->"],
        correct: 1,
    },
    {
        question: "Which property is used to change the background color of an element?",
        alternatives: ["color", "bgcolor", "background-color", "background"],
        correct: 2,
    },
    {
        question: "How do you apply a style to all <p> elements?",
        alternatives: ["p { }", ".p { }", "#p { }", "all.p { }"],
        correct: 0,
    },
    {
        question: "Which property is used to change the font of an element?",
        alternatives: ["font-style", "text-style", "font-family", "typeface"],
        correct: 2,
    },
];

const javascriptData = [
    {
        question: "Which syntax is correct to output 'Hello World' in an alert box?",
        alternatives: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
        correct: 2,
    },
    {
        question: "How do you call a function named 'myFunction'?",
        alternatives: ["call function myFunction()", "call myFunction()", "myFunction()", "execute myFunction()"],
        correct: 2,
    },
    {
        question: "How to write an IF statement in JavaScript?",
        alternatives: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
        correct: 1,
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        alternatives: ["if (i <> 5)", "if i =! 5 then", "if (i != 5)", "if i not = 5"],
        correct: 1,
    },
    {
        question: "How does a FOR loop start?",
        alternatives: ["for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)"],
        alternatives: 3,
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        alternatives: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        correct: 1,
    },
];

const accessibilityData = [
    {
        question: "What does 'WCAG' stand for?",
        alternatives: ["Web Content Accessibility Guidelines", "Web Compliance Accessibility Guide", "Web Content Accessibility Goals", "Website Compliance and Accessibility Guidelines"],
        correct: 0,
    },
    {
        question: "Which element is used to provide alternative text for images for screen reader users?",
        alternatives: ["<alt>", "<figcaption>", "<description>", "<img alt='description'>"],
        correct: 3,
    },
    {
        question: "What does ARIA stand for in web development?",
        alternatives: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Assistance", "Accessible Responsive Internet Applications", "Automated Responsive Internet Actions"],
        correct: 0,
    },
    {
        question: "Which of the following is not a principle of the WCAG?",
        alternatives: ["Perceivable", "Dependable", "Operable", "Understandable"],
        correct: 1,
    },
    {
        question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        alternatives: ["3:1", "4.5:1", "7:1", "2:1"],
        correct: 1,
    },
    {
        question: "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
        alternatives: ["<div>", "<span>", "<a href='...'>", "<p>"],
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