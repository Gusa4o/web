function calculateAverage() {
    let table = document.getElementById("data-table");
    let rows = table.getElementsByTagName("tr");
    let totalAge = 0;
    let rowCount = 0;

    for (let i = 1; i < rows.length; i++) { // Починаємо з 1, щоб пропустити заголовок таблиці
        let age = parseInt(rows[i].getElementsByTagName("td")[3].innerHTML);
        if (!isNaN(age)) {
            totalAge += age;
            rowCount++;
        }
    }

    let averageAge = totalAge / rowCount;

    document.getElementById("average-age").innerHTML = "Середній вік: " + averageAge.toFixed(2);
}