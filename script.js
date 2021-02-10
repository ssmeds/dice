// Creating elements
let input = document.createElement("input");
let div = document.createElement("div");

// Appending input to body
document.body.appendChild(input);
document.body.appendChild(div);

// Eventlistener for input
input.addEventListener("keydown", function (e) {
    div.innerHTML = "";
    if (e.key == 'Enter') {
        let userInput = input.value;
        console.log(userInput);
        // If input is Not a Number (NaN) then alert user
        if (isNaN(userInput)) {
            div.insertAdjacentHTML("beforeend", `<p>Du måste mata in ett nummer</p>`);
            console.log("userInput som string:", userInput);
            input.value = "";
        }
        // Parse input to Integer
        let userNumber = parseInt(userInput);

        // Call dice function with user input as max value
        dice(userNumber);

        // Display what number the user chose as input
        div.insertAdjacentHTML("afterbegin", `<p>Your number: ${userNumber}</p>`);
        console.log(userNumber);
        input.value = "";
    }
})

// Function to randomize a number between 1 and user input
function dice(max) {
    let randomNumber = Math.floor(Math.random() * (max - 1) + 1);
    if (randomNumber == 0) {
        console.log("Oh no, a zero!!");
    }
    div.insertAdjacentHTML("beforeend", `<p>Random number: ${randomNumber}</p>`);
    console.log(randomNumber);
}
