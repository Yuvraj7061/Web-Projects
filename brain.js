const questions = [
    {
        que: 'Which of the following is a markup language?',
        options: {
            a: 'HTML',
            b: 'CSS',
            c: 'JavaScript',
            d: 'Python'
        },
        correct: 'a'
    },
    {
        que: 'What year was JavaScript launched?',
        options: {
            a: '1990',
            b: '1995',
            c: '2000',
            d: '2005'
        },
        correct: 'b'
    },
    {
        que: 'What does CSS stand for?',
        options: {
            a: 'Computer Style Sheets',
            b: 'Cascading Style Sheets',
            c: 'Creative Style Sheets',
            d: 'Colorful Style Sheets'
        },
        correct: 'b'
    },
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result');

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        const options = question.options;
        const optionsHTML = Object.entries(options)
            .map(([optionKey, optionValue]) => `
                <input type="radio" name="answer" value="${optionKey}" id="${optionKey}">
                <label for="${optionKey}">${optionValue}</label><br>
            `)
            .join('');

        questionContainer.innerHTML = `
            <h2>${question.que}</h2>
            <form>${optionsHTML}</form>
        `;
    } else {
        showResult();
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        loadQuestion();
    }
}

function showResult() {
    questionContainer.innerHTML = '';
    resultContainer.textContent = `Your Score: ${score}/${questions.length}`;
}
  
loadQuestion();
