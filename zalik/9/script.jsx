const { useState } = React;

const App = () => {
    const [greenSquareColor, setGreenSquareColor] = useState('green');
    const [redSquareColor, setRedSquareColor] = useState('red');
    const [greenSquareText, setGreenSquareText] = useState('Зелений');
    const [redSquareText, setRedSquareText] = useState('Червоний');

    const handleStartClick = () => {
        setGreenSquareColor(redSquareColor);
        setRedSquareColor(greenSquareColor);
        setGreenSquareText(redSquareText);
        setRedSquareText(greenSquareText);
    };

    return (
        <div>
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: greenSquareColor,
                    margin: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'Arial, serif',
                    fontWeight: '600',
                    fontSize: '4vh',
                    border: '2px solid black',
                    display: 'flex',
                    float: 'left',
                }}
            >
                {greenSquareText}
            </div>
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: redSquareColor,
                    margin: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'Arial, serif',
                    fontWeight: '600',
                    fontSize: '4vh',
                    border: '2px solid black',
                    display: 'flex',
                    float: 'left',
                }}
            >
                {redSquareText}
            </div>
            <button onClick={handleStartClick}>Старт</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))
