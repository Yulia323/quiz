export function initForm() {
    const form = document.getElementById("order-form");
    const phoneInput = document.getElementById("phone");
    const countrySelect = document.getElementById("country-select");
    const countryFlag = document.getElementById("country-flag");

    function initPhoneValidation() {
        const countryFlags = {
            "+1": "🇺🇸",
            "+7": "🇷🇺",
            "+380": "🇺🇦",
            "+49": "🇩🇪",
            "+33": "🇫🇷",
            "+39": "🇮🇹",
            "+34": "🇪🇸"
        };

        countryFlag.textContent = countryFlags["+7"];
        phoneInput.value = "+7 ";

        function updatePhoneValidation() {
            const selectedOption = countrySelect.options[countrySelect.selectedIndex];
            const maxLength = parseInt(selectedOption.getAttribute("data-length"), 10);

            phoneInput.setAttribute("maxlength", selectedOption.value.length + maxLength + 1);
            phoneInput.value = phoneInput.value.slice(0, phoneInput.maxLength);
        }

        countrySelect.addEventListener("change", () => {
            const selectedCode = countrySelect.value;
            phoneInput.value = selectedCode + " ";
            countryFlag.textContent = countryFlags[selectedCode];
            updatePhoneValidation();
        });

        phoneInput.addEventListener("input", (event) => {
            let value = phoneInput.value.replace(/\D/g, "");
            const selectedCode = countrySelect.value.replace(/\D/g, "");
            const selectedOption = countrySelect.options[countrySelect.selectedIndex];
            const maxLength = parseInt(selectedOption.getAttribute("data-length"), 10);

            if (!value.startsWith(selectedCode)) {
                value = selectedCode;
            }

            value = value.slice(0, selectedCode.length + maxLength);
            phoneInput.value = "+" + value;
        });

        updatePhoneValidation();
    }

    function initFormSubmission() {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const userData = {
                name: formData.get("name"),
                surname: formData.get("surname"),
                phone: formData.get("phone"),
                email: formData.get("email")
            };

            console.log("Отправка данных:", userData);
            alert("Спасибо! Ваши данные отправлены.");
            form.reset();
        });
    }

    initPhoneValidation();
    initFormSubmission();
}
