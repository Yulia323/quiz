import { initQuiz, startQuizTimer } from "./quiz.js";
import { initForm } from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
    const pageContent = {
        titleMain: "Индивидуальный подбор кофе",
        descriptionMain: "Начните день с идеальной чашки ароматного зернового кофе. Густой бархатный вкус, тонкие нотки орехов и шоколада, насыщенный аромат – всё, что нужно, чтобы почувствовать тепло и уют. Этот кофе станет вашим любимым ритуалом каждое утро.",
        titleOffer: "Предложение специально для Вас!",
        descriptionOffer: "Эксклюзивный зерновой кофе, выращенный на лучших плантациях мира. Отборные зёрна средней и тёмной обжарки создают идеальный баланс вкуса: насыщенная текстура, лёгкая кислинка и глубокий послевкус. Наслаждайтесь кофе, достойным настоящих гурманов."
    };

    document.getElementById("title").textContent = pageContent.titleMain;
    document.getElementById("description").textContent = pageContent.descriptionMain;
    document.querySelector("#screen-3 .title").textContent = pageContent.titleOffer;
    document.getElementById("final-description").textContent = pageContent.descriptionOffer;

    startQuizTimer(120);
    initQuiz();
    initForm();
});

document.getElementById("contact-button").addEventListener("click", () => {
    document.getElementById("contact-modal").style.display = "block";
});
