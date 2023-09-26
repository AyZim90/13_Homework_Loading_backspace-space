document.addEventListener("DOMContentLoaded", function () {
    // Ждем 5 секунд и скрываем индикатор загрузки
    setTimeout(function () {
        var loader = document.querySelector(".lds-ellipsis");
        var inputContainer = document.querySelector(".input-container");
        
        if (loader) {
            loader.style.display = "none";
        }

        if (inputContainer) {
            inputContainer.style.display = "block";
        }
    }, 5000);

    var keyChangeInput = document.getElementById("keyChangeInput");

    keyChangeInput.addEventListener("keydown", function (event) {
        if (event.key === " ") {
            event.preventDefault();
            keyChangeInput.value = keyChangeInput.value.slice(0, -1); // Удаляем последний символ
        } else if (event.key === "Backspace") {
            event.preventDefault();
            keyChangeInput.value += " "; // Добавляем пробел
        }
    });
});