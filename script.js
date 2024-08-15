const questions = [
    {
        question: "Qual é a unidade de medida da resistência elétrica no Sistema Internacional de Unidades?",
        answers: ["Ohm", "Joule", "Newton", "Watt"],
        correct: 0
    },
    {
        question: "Qual das leis de Newton é conhecida como o princípio da inércia?",
        answers: ["Primeira lei", "Segunda lei", "Terceira lei", "Lei da gravitação universal"],
        correct: 0
    },
    {
        question: "O que é a força eletromotriz?",
        answers: ["A energia por unidade de carga fornecida por uma fonte elétrica", "A resistência de um circuito", "A força exercida entre duas cargas", "A velocidade da corrente elétrica"],
        correct: 0
    },
    {
        question: "Qual é a fórmula para a energia cinética?",
        answers: ["1/2 mv^2", "mgh", "qV", "mcΔT"],
        correct: 0
    },
    {
        question: "Qual é a carga do elétron?",
        answers: ["-1,6 x 10^-19 C", "1,6 x 10^-19 C", "0 C", "1 C"],
        correct: 0
    },
    {
        question: "O que é o trabalho realizado por uma força constante?",
        answers: ["A multiplicação da força pela distância na direção da força", "A energia cinética final menos a energia cinética inicial", "A diferença de potencial entre dois pontos", "A soma das energias potenciais e cinéticas"],
        correct: 0
    },
    {
        question: "O que é o campo magnético?",
        answers: ["A região ao redor de um ímã onde forças magnéticas podem ser detectadas", "A força de atração entre dois corpos", "A energia armazenada em um capacitor", "A corrente elétrica em um fio"],
        correct: 0
    },
    {
        question: "Qual é a constante de Planck?",
        answers: ["6,626 x 10^-34 Js", "3,00 x 10^8 m/s", "9,81 m/s²", "1,60 x 10^-19 C"],
        correct: 0
    },
    {
        question: "O que diz a Lei de Coulomb?",
        answers: ["A força entre duas cargas é diretamente proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância entre elas", "A energia não pode ser criada nem destruída, apenas transformada", "A corrente em um condutor é diretamente proporcional à voltagem aplicada", "O trabalho realizado é igual à variação da energia cinética"],
        correct: 0
    },
    {
        question: "Qual é a equação que relaciona a energia total (E) de um sistema com a sua massa (m)?",
        answers: ["E = mc²", "E = hv", "E = 1/2 mv²", "E = qV"],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-container").innerText = currentQuestion.question;

    const answersContainer = document.getElementById("answers-container");
    answersContainer.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });

    document.getElementById("next-question-button").style.display = "none";
    document.getElementById("message-container").style.display = "none";
}

function checkAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const messageContainer = document.getElementById("message-container");

    if (index === currentQuestion.correct) {
        messageContainer.innerText = "Parabéns, resposta correta!";
        messageContainer.style.display = "block";
        document.getElementById("next-question-button").style.display = "block";
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>Parabéns! Você completou o quiz!</h2>
    `;
}

loadQuestion();






