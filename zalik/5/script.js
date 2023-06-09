// Створення форми
let form = document.createElement('form');
form.style.border = '1px solid black';
form.style.padding = '0 20px 20px 20px';
form.style.width = '220px';

let nameForm = document.createElement('h3');
nameForm.textContent = 'Введіть наступні дані:';
form.appendChild(nameForm);
nameForm.style.marginBottom = '-5px';

// Додавання поля для вводу імені
let nameLabel = document.createElement('label');
nameLabel.textContent = 'Ім\'я: ';
form.appendChild(nameLabel);

let nameInput = document.createElement('input');
nameInput.type = 'text' ;
nameLabel.appendChild(nameInput);
nameInput.style.marginTop = '10px';

// Додавання поля для вводу віку
let ageLabel = document.createElement('label');
ageLabel.textContent = 'Вік: ' + ' ';
form.appendChild(ageLabel);

let ageInput = document.createElement('input');
ageInput.type = 'number';
ageLabel.appendChild(ageInput);
ageInput.style.marginTop = '10px';

// Додавання кнопки "Старт"
let startButton = document.createElement('button');
startButton.textContent = 'Старт';
form.appendChild(startButton);
startButton.style.marginTop = '10px';

// Додавання форми до сторінки
document.body.appendChild(form);

// Функція для створення модального вікна
function createModal(name, age) {
    // Створення контейнера модального вікна
    let modalContainer = document.createElement('div');
    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '0';
    modalContainer.style.left = '0';
    modalContainer.style.width = '100%';
    modalContainer.style.height = '100%';
    modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modalContainer.style.display = 'flex';
    modalContainer.style.overflow = 'auto';

    // Створення модального вікна
    let modal = document.createElement('div');
    modal.style.backgroundColor = 'white';
    modal.style.paddingTop = '35px';
    modal.style.paddingLeft = '20px';
    modal.style.width = '320px';
    modal.style.height = ' 55px';
    modal.style.margin = '230px auto';
    modal.style.border = ' 1px solid #888';

    // Додавання даних в модальне вікно
    let nameParagraph = document.createElement('span');
    nameParagraph.textContent = 'Ім\'я: ' + name + ' , ';
    modal.appendChild(nameParagraph);

    let ageParagraph = document.createElement('span');
    ageParagraph.textContent = 'Вік: ' + age;
    modal.appendChild(ageParagraph);

    // Додавання кнопки "Закрити"
    let closeButton = document.createElement('button');
    closeButton.textContent = 'Закрити';
    modal.appendChild(closeButton);
    closeButton.style.float = 'right';
    closeButton.style.marginRight = '20px';

    // Функція для закриття модального вікна
    function closeModal() {
        document.body.removeChild(modalContainer);
    }

    // Обробник події при натисканні на кнопку "Закрити"
    closeButton.addEventListener('click', closeModal);

    // Обробник події при натисканні поза модальним вікном
    modalContainer.addEventListener('click', function(event) {
        if (event.target === modalContainer) {
            closeModal();
        }
    });

    // Додавання модального вікна до контейнера
    modalContainer.appendChild(modal);

    // Додавання контейнера до сторінки
    document.body.appendChild(modalContainer);
}

// Обробник події при натисканні на кнопку "Старт"
startButton.addEventListener('click', function(event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    // Отримання значень з полів вводу
    let name = nameInput.value;
    let age = ageInput.value;

    // Створення модального вікна з отриманими даними
    createModal(name, age);
});
