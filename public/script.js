const questions = [
    {
        question: "111001 + 10011 = ?",
        options: ["100111", "1001100", "011000"],
        answer: "1001100"
    },
    {
        question: "100111 + 101 = ?",
        options: ["101100", "110011", "101011"],
        answer: "101100"
    },
    {
        question: "110011101 - 10111 = ?",
        options: ["111000011", "110000110", "11100001"],
        answer: "110000110"
    },
    {
        question: "1111111 - 10001 = ?",
        options: ["110011", "110000", "1101110"],
        answer: "1101110"
    },
    {
        question: "1001 * 111 = ?",
        options: ["111111", "110010", "110110"],
        answer: "111111"
    },
    {
        question: "101111 * 10001 = ?",
        options: ["111111000", "1100111100", "1100011111"],
        answer: "1100011111"
    },
    {
        question: "1000000 / 100 = ?",
        options: ["10000", "110100", "110110"],
        answer: "10000"
    },
    {
        question: "1000000000 / 1000 = ?",
        options: ["10000100", "1000000", "0000001"],
        answer: "1000000"
    },
    {
        question: "10100101 * 1111111 = ?",
        options: ["1000010010001", "101000111011011", "110000110001"],
        answer: "101000111011011"
    },
    {
        question: "11111011 / 01011111 = ?",
        options: ["101110100000101", "101110111011010", "101110100100101"],
        answer: "101110100100101"
    },
    {
        question: "1001 / 10 = ?",
        options: ["1001", "100.1", "101.0"],
        answer: "100.1"
    },
    {
        question: "1001101 / 100 = ?",
        options: ["10000.1", "10011.1", "10011.01"],
        answer: "10011.01"
    },
];

let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length; // Adicionando o número total de perguntas
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submit-btn");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const scoreDisplay = document.getElementById("score-display");

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionContainer.innerHTML = currentQuestionData.question;
    optionsContainer.innerHTML = "";
    currentQuestionData.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(optionIndex) {
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));
    options[optionIndex].classList.add("selected");
}

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(".selected");
    if (selectedOption) {
        const selectedOptionText = selectedOption.innerText;
        const correctAnswer = questions[currentQuestion].answer;
        if (selectedOptionText === correctAnswer) {
            score++;
            alert("Resposta correta!");
        } else {
            alert("Resposta incorreta! A resposta correta é: " + correctAnswer);
        }
        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            loadQuestion();
        } else {
            showModal();
        }
    } else {
        alert("Por favor, selecione uma resposta.");
    }
});

function showModal() {
    const closeModal = document.querySelector(".close");
    scoreDisplay.textContent = `Pontuação: Você acertou ${score} de ${totalQuestions} questões.`;
    modal.style.display = "block";

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

loadQuestion();