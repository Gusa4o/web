// Створення двох квадратів
let greenSquare = document.createElement("div");
greenSquare.style.width = "200px";
greenSquare.style.height = "200px";
greenSquare.style.backgroundColor = "green";
greenSquare.style.margin = "10px";
greenSquare.style.justifyContent = 'center';
greenSquare.style.alignItems = 'center';
greenSquare.style.textAlign = 'center';
greenSquare.style.color = 'white';
greenSquare.style.fontFamily = 'Arial, serif';
greenSquare.style.fontWeight = '600';
greenSquare.style.fontSize = '4vh';
greenSquare.style.border = '2px solid black';
greenSquare.style.display = 'flex';
greenSquare.style.float = 'left';
greenSquare.textContent = "Зелений";

let redSquare = document.createElement("div");
redSquare.style.width = "200px";
redSquare.style.height = "200px";
redSquare.style.backgroundColor = "red";
redSquare.style.margin = "10px";
redSquare.style.justifyContent = 'center';
redSquare.style.alignItems = 'center';
redSquare.style.textAlign = 'center';
redSquare.style.color = 'white';
redSquare.style.fontFamily = 'Arial, serif';
redSquare.style.fontWeight = '600';
redSquare.style.fontSize = '4vh';
redSquare.style.border = '2px solid black';
redSquare.style.display = 'flex';
redSquare.style.float = 'left';
redSquare.textContent = "Червоний";

// Створення кнопки "Старт"
let startButton = document.createElement("button");
startButton.textContent = "Старт";

// Додавання обробників подій до кнопки "Старт"
startButton.addEventListener("click", function() {
    let greenSquareColor = greenSquare.style.backgroundColor;
    let redSquareColor = redSquare.style.backgroundColor;
    let greenSquareText = greenSquare.textContent;
    let redSquareText = redSquare.textContent;

    greenSquare.style.backgroundColor = redSquareColor;
    redSquare.style.backgroundColor = greenSquareColor;
    greenSquare.textContent = redSquareText;
    redSquare.textContent = greenSquareText;
});

// Додавання квадратів і кнопки до body
document.body.appendChild(greenSquare);
document.body.appendChild(redSquare);
document.body.appendChild(startButton);
