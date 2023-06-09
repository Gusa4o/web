document.getElementById("startButton").addEventListener("click", function(event) {
    event.preventDefault();
    showModal();
});

document.querySelector(".close").addEventListener("click", function() {
    hideModal();
});

function showModal() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let modalText = document.getElementById("modalText");
    modalText.textContent = "Ім'я: " + name + ", Вік: " + age;

    let modal = document.getElementById("modal");
    modal.style.display = "block";
}

function hideModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}
