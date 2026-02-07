const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const teamInput = document.getElementById("team");


const message = document.createElement("p");
form.appendChild(message);

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() === "") {
        nameInput.style.border = "2px solid red";
    } else {
        nameInput.style.border = "2px solid green";
    }
});


emailInput.addEventListener("input", function () {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(emailPattern)) {
        emailInput.style.border = "2px solid red";
    } else {
        emailInput.style.border = "2px solid green";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === ""
    ) {
        message.textContent = "Please fill all mandatory fields correctly.";
        message.style.color = "red";
    } else {
        message.textContent = "Registration Successful!";
        message.style.color = "green";

        form.reset();

        nameInput.style.border = "";
        emailInput.style.border = "";
    }
});
