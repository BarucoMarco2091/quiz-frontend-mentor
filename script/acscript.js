const accessibilityData = [
    {
        icon: "assets/images/icon-accessibility.svg",
        numQuestion: 1,
        question: "What does 'WCAG' stand for?",
        alternatives: ["Web Content Accessibility Guidelines", "Web Compliance Accessibility Guide", "Web Content Accessibility Goals", "Website Compliance and Accessibility Guidelines"],
        correct: 0,
    },
    {
        icon: "assets/images/icon-accessibility.svg",
        numQuestion: 2,
        question: "Which element is used to provide alternative text for images for screen reader users?",
        alternatives: ["<alt>", "<figcaption>", "<description>", "<img alt='description'>"],
        correct: 3,
    },
    {
        icon: "assets/images/icon-accessibility.svg",
        numQuestion: 3,
        question: "What does ARIA stand for in web development?",
        alternatives: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Assistance", "Accessible Responsive Internet Applications", "Automated Responsive Internet Actions"],
        correct: 0,
    },
    {
        icon: "assets/images/icon-accessibility.svg",
        numQuestion: 4,
        question: "Which of the following is not a principle of the WCAG?",
        alternatives: ["Perceivable", "Dependable", "Operable", "Understandable"],
        correct: 1,
    },
    {
        icon: "assets/images/icon-accessibility.svg",
        numQuestion: 5,
        question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        alternatives: ["3:1", "4.5:1", "7:1", "2:1"],
        correct: 1,
    },
    {
        icon: "assets/images/icon-accessibility.svg",
        numQuestion: 6,
        question: "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
        alternatives: ["<div>", "<span>", "<a href='...'>", "<p>"],
        correct: 2,
    },
];

let accessibilityScore = 0;
let accessibilityCurrentQuestion = 0;
let acSelectedAnswerIndex = null;

const acButtonQuiz = document.querySelector('.quiz-button-accessibility');
acButtonQuiz.addEventListener('click', function accessibilityLoadQuiz() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const acIcon = document.createElement('img');
    acIcon.className = 'accessibility-icon';
    acIcon.src = accessibilityData[accessibilityCurrentQuestion].icon;
    container.appendChild(acIcon);

    const numberQuestion = document.createElement('span');
    numberQuestion.className = 'number-question';
    numberQuestion.innerHTML = `Question ${accessibilityData[accessibilityCurrentQuestion].numQuestion} of 6`;
    container.appendChild(numberQuestion);

    const accessibilityQuestions = document.createElement('h2');
    accessibilityQuestions.className = 'section-quiz';
    accessibilityQuestions.innerHTML = `<h2>${accessibilityData[accessibilityCurrentQuestion].question}</h2>`;
    container.appendChild(accessibilityQuestions);

    accessibilityData[accessibilityCurrentQuestion].alternatives.forEach((alternatives, index) => {
        const buttonAlternative = document.createElement('button');
        buttonAlternative.className = 'button-answers';
        buttonAlternative.textContent = alternatives;
        buttonAlternative.addEventListener('click', function () {
            acSelectedAnswerIndex = index;
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
    nextButton.innerHTML = 'Next';
    container.appendChild(nextButton);

    nextButton.addEventListener('click', function () {
        if(acSelectedAnswerIndex === null) {
            alert('Please, select an answer');
            return;
        };

        if(acSelectedAnswerIndex === accessibilityData[accessibilityCurrentQuestion].correct) {
            accessibilityScore++;
        };

        const allButtons = document.querySelectorAll('.button-answers');
        allButtons.forEach((button, index) => {
            if(index === accessibilityData[accessibilityCurrentQuestion].correct) {
                button.style.border = '2px solid green';
            } else {
                button.style.border = '2px solid red';
            };
        });

        nextButton.disabled = true;

        setTimeout(function() {
            acSelectedAnswerIndex = null;
            nextButton.disabled = false;
            accessibilityCurrentQuestion++;
            if(accessibilityCurrentQuestion < accessibilityData.length) {
                accessibilityLoadQuiz();
            } else {
                container.innerHTML = `<p class="results">Quiz completo! Pontuação: ${accessibilityScore}/${accessibilityData.length}</p>`;
            };
        }, 2000);
    });
});