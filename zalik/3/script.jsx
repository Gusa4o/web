import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [people, setPeople] = useState([
    { number: '1.', rank: 'викладач', fullName: 'Степанов Степан Степанович', age: 33 },
    { number: '2.', rank: 'викладач', fullName: 'Федоров Федір Федорович', age: 25 },
    { number: '3.', rank: 'викладач', fullName: 'Антоненко Антон Антонович', age: 31 }
  ]);

  const [averageAge, setAverageAge] = useState(0);

  const calculateAverageAge = () => {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    const avgAge = totalAge / people.length;
    setAverageAge(avgAge.toFixed(2));
  };

  return (
    <div>
      <style>
        {`
          table {
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
          }
        `}
      </style>

      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Посада</th>
            <th>ПІБ</th>
            <th>Вік</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.number}</td>
              <td>{person.rank}</td>
              <td>{person.fullName}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Середній вік: {averageAge}</p>
      <button onClick={calculateAverageAge}>Старт</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
