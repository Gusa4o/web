// Створюємо таблицю із заголовками
let table = document.createElement('table');
table.style.borderCollapse = 'collapse';

let headers = ['№ п/п', 'Посада', 'ПІБ', 'Вік'];
let headerRow = document.createElement('tr');

for (let i = 0; i < headers.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = headers[i];
    headerCell.style.border = '1px solid black';
    headerCell.style.padding = '10px';
    headerRow.appendChild(headerCell);
}

table.appendChild(headerRow);

// Додаємо рядки з даними
let data = [
    { number: '1.', rank: 'викладач', fullName: 'Степанов Степан Степанович', age: 33 },
    { number: '2.', rank: 'викладач', fullName: 'Федоров Федір Федорович', age: 25 },
    { number: '3.', rank: 'викладач', fullName: 'Антоненко Антон Антонович', age: 31 }
];

for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr');

    let numberCell = document.createElement('td');
    numberCell.textContent = data[i].number;
    numberCell.style.border = '1px solid black';
    numberCell.style.padding = '10px';
    numberCell.style.textAlign = 'center';
    row.appendChild(numberCell);

    let rankCell = document.createElement('td');
    rankCell.textContent = data[i].rank;
    rankCell.style.border = '1px solid black';
    rankCell.style.padding = '10px';
    rankCell.style.textAlign = 'center';
    row.appendChild(rankCell);

    let fullNameCell = document.createElement('td');
    fullNameCell.textContent = data[i].fullName;
    fullNameCell.style.border = '1px solid black';
    fullNameCell.style.padding = '10px';
    fullNameCell.style.textAlign = 'center';
    row.appendChild(fullNameCell);

    let ageCell = document.createElement('td');
    ageCell.textContent = data[i].age;
    ageCell.style.border = '1px solid black';
    ageCell.style.padding = '10px';
    ageCell.style.textAlign = 'center';
    row.appendChild(ageCell);

    table.appendChild(row);
}

// Додаємо таблицю до сторінки
let container = document.createElement('div');
container.appendChild(table);
document.body.appendChild(container);

// Створюємо елемент для відображення середнього віку
let averageAgeElement = document.createElement('p');
averageAgeElement.textContent = 'Середній вік:';
container.appendChild(averageAgeElement);

// Створюємо кнопку для обчислення середнього віку
let startButton = document.createElement('button');
startButton.textContent = 'Старт';
startButton.addEventListener('click', function() {
    let ageCells = document.querySelectorAll('td:nth-child(4)');
    let totalAge = 0;

    for (let i = 0; i < ageCells.length; i++) {
        totalAge += parseInt(ageCells[i].textContent);
    }

    let averageAge = totalAge / ageCells.length;

    // Оновлюємо текст елементу для відображення середнього віку
    averageAgeElement.textContent = 'Середній вік: ' + averageAge.toFixed(2);
});

document.body.appendChild(startButton);
