import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person"

const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: "Kaito", age: 15},
      {name: "Tsuki", age: 18},
      {name: "Angelito", age: 4}
    ]
  });
  const switchNameHandler = () =>{
    setPersonsState({
      persons: [
        {name: "Kaitongo", age: 15},
        {name: "Tsukina", age: 18},
        {name: "Angelillo", age: 4}
      ]
    })
  }
  return (
    <div className="App">
    <h1>Hi I am a React app</h1>
    <button onClick={switchNameHandler}>Click Me</button>
    <Person className="person" name={personsState.persons[0].name} age={personsState.persons[0].age} />
    <Person className="person" name={personsState.persons[1].name} age={personsState.persons[1].age}>She is not here though.</Person>
    <Person className="person" name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    );
  }
  
  export default App;
  