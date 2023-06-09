function swapColors() {
    let square1 = document.getElementById("square1");
    let square2 = document.getElementById("square2");

    let color1 = square1.style.backgroundColor;
    let color2 = square2.style.backgroundColor;
    let text1 = square1.innerText;
    let text2 = square2.innerText;

    square1.style.backgroundColor = color2;
    square2.style.backgroundColor = color1;
    square1.innerText = text2;
    square2.innerText = text1;
}