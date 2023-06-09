const { useState } = React;

const App = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createModal(name, age);
    };

    const createModal = (name, age) => {
        
        const modalContainer = document.createElement('div');
        modalContainer.style.position = 'fixed';
        modalContainer.style.top = '0';
        modalContainer.style.left = '0';
        modalContainer.style.width = '100%';
        modalContainer.style.height = '100%';
        modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modalContainer.style.display = 'flex';
        modalContainer.style.overflow = 'auto';

       
        const modal = document.createElement('div');
        modal.style.backgroundColor = 'white';
        modal.style.paddingTop = '35px';
        modal.style.paddingLeft = '20px';
        modal.style.width = '320px';
        modal.style.height = ' 55px';
        modal.style.margin = '230px auto';
        modal.style.border = ' 1px solid #888';

        // Add data to modal
        const nameParagraph = document.createElement('span');
        nameParagraph.textContent = `Ім'я: ${name}, `;
        modal.appendChild(nameParagraph);

        const ageParagraph = document.createElement('span');
        ageParagraph.textContent = `Вік: ${age}`;
        modal.appendChild(ageParagraph);

   
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Закрити';
        modal.appendChild(closeButton);
        closeButton.style.float = 'right';
        closeButton.style.marginRight = '20px';

        
        const closeModal = () => {
            document.body.removeChild(modalContainer);
        };

        
        closeButton.addEventListener('click', closeModal);

        
        modalContainer.addEventListener('click', (event) => {
            if (event.target === modalContainer) {
                closeModal();
            }
        });

        
        modalContainer.appendChild(modal);

        
        document.body.appendChild(modalContainer);
    };

    return (
        <form style={{ border: '1px solid black', padding: '0 20px 20px 20px', width: '220px' }}>
            <h3 style={{ marginBottom: '-5px' }}>Введіть наступні дані:</h3>
            <label>Ім'я:&nbsp;
                <input type="text" value={name} onChange={handleNameChange} style={{ marginTop: '10px' }} />
            </label>
            <label>Вік: &nbsp;
                <input type="number" value={age} onChange={handleAgeChange} style={{ marginTop: '10px' }} />
            </label>
            <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Старт</button>
        </form>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))
