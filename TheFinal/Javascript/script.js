const form = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = answerInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter your name.";
        message.style.color = "red";
    } else {
        message.textContent = `Hello ${name}, thanks for contacting Greentech Solutions!`;
        message.style.color = "green";
    }
});