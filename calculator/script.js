const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let operation = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "=") {
            try {
                display.value = eval(operation); // Using eval for simplicity, but consider safer alternatives
                operation = display.value;
            } catch (error) {
                display.value = "Error";
                operation = "";
            }
        } else if (buttonText === "C") {
            operation = "";
            display.value = "";
        } else if (buttonText === "←") {
            operation = operation.slice(0, -1);
            display.value = operation;
        } else {
            operation += buttonText;
            display.value = operation;
        }
    });
});

