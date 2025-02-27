import { showLoadingScreen } from "./loading.js";

export function initQuiz() {
    const questions = document.querySelectorAll("#quiz-container > div");
    let currentQuestionIndex = 0;

    function showNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            questions[currentQuestionIndex].classList.add("hidden");
            currentQuestionIndex++;
            questions[currentQuestionIndex].classList.remove("hidden");
        } else {
            document.dispatchEvent(new Event("quizCompleted"));
        }
    }

    questions.forEach((question) => {
        question.querySelectorAll(".quiz-option").forEach(button => {
            button.addEventListener("click", showNextQuestion, { once: true });
        });
    });
}

let timerInterval;
export function startQuizTimer(seconds) {
    const timerElement = document.getElementById("timer");
    let timeLeft = seconds;

    function updateTimerDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimerEnd();
        }
    }, 1000);
}

export function stopTimer() {
    clearInterval(timerInterval);
}

function handleTimerEnd() {
    const quizContainer = document.getElementById("quiz-container");

    if (quizContainer.classList.contains("hidden")) {
        quizContainer.classList.remove("hidden");
    } else {
        alert("Вы не успели ответить на вопросы. Квиз будет перезапущен");
        location.reload();
    }
}

document.addEventListener("quizCompleted", () => {
    document.getElementById("screen-1").classList.remove("active");
    document.getElementById("screen-2").classList.add("active");
    stopTimer();

    showLoadingScreen();

    setTimeout(() => {
        document.getElementById("screen-2").classList.remove("active");
        document.getElementById("screen-3").classList.add("active");
    }, 4000);
});
