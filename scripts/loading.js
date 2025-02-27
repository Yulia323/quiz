export function showLoadingScreen() {
    const loadingText = document.querySelector(".loading-text");
    const messages = [
        "Анализируем ваш выбор...",
        "Готовим рекомендации специально для Вас...",
        "Осталось совсем немного..."
    ];
    let index = 0;

    function showNextMessage() {
        if (index < messages.length) {
            loadingText.textContent = messages[index];
            loadingText.classList.add("show");
            setTimeout(() => {
                loadingText.classList.remove("show");
                index++;
                showNextMessage();
            }, 1000);
        }
    }

    showNextMessage();
}
