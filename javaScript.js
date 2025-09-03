let questions = [
     {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctOption: "All of the above"
    },
    {
        question: "What is the correct syntax for an if statement in JavaScript?",
        options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
        correctOption: "if (i == 5)"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "create myFunction()", "function = myFunction()"],
        correctOption: "function myFunction()"
    },
    {
        question: "Which of the following is a primitive data type in JavaScript?",
        options: ["Object", "Array", "String", "Function"],
        correctOption: "String"
    },
    {
        question: "How do you select an HTML element with the id 'demo'?",
        options: ["document.getElementById('demo')", "document.querySelector('#demo')", "Both of the above", "None of the above"],
        correctOption: "Both of the above"
    }
];

let displayQuestion = document.getElementById("displayQuestion");
let displayOption = document.getElementById("displayOption");
let currentQuestionNumber = document.getElementById("currentQuestionNumber");
let totalQuestionNumber = document.getElementById("totalQuestionNumber");
let scoreDisplay = document.getElementById("score");
let resultDiv = document.getElementById("result");

totalQuestionNumber.innerHTML = questions.length;
let index = 0;
let score = 0;

function Renderer() {
    let currentQuestion = questions[index];
    displayQuestion.innerHTML = currentQuestion.question;
    displayOption.innerHTML = "";
    resultDiv.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('bg-gray-200', 'text-gray-800', 'font-semibold', 'py-3', 'px-4', 'rounded-lg', 'hover:bg-gray-300', 'transition-colors', 'duration-200', 'w-full');
        button.onclick = () => checkAnswer(option, currentQuestion.correctOption);
        displayOption.appendChild(button);
    });

    currentQuestionNumber.innerHTML = index + 1;
}

function checkAnswer(selectedOption, correctOption) {
    const buttons = displayOption.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true; // Disable all buttons after one is clicked
        if (button.textContent === correctOption) {
            button.classList.remove('bg-gray-200', 'hover:bg-gray-300');
            button.classList.add('bg-green-500', 'text-white', 'scale-105');
        } else if (button.textContent === selectedOption) {
            button.classList.remove('bg-gray-200', 'hover:bg-gray-300');
            button.classList.add('bg-red-500', 'text-white');
        }
    });

    if (selectedOption === correctOption) {
        resultDiv.innerHTML = "Correct! ✅";
        resultDiv.classList.remove('text-red-500');
        resultDiv.classList.add('text-green-500');
        score++; // Increment the score for a correct answer
        scoreDisplay.innerHTML = score; // Update the score display
    } else {
        resultDiv.innerHTML = `Wrong! ❌ The correct answer was "${correctOption}".`;
        resultDiv.classList.remove('text-green-500');
        resultDiv.classList.add('text-red-500');
    }
}

function nextQuestion() {
    if (index < questions.length - 1) {
        index += 1;
        Renderer();
    } else {
        alert("You have reached the end of the quiz!");
    }
}

function previousQuestion() {
    if (index > 0) {
        index -= 1;
        Renderer();
    } else {
        alert("Can't go back from the first question!");
    }
}

// Initial render
Renderer();