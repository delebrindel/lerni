import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Kaito", age: 15},
      {name: "Tsuki", age: 18},
      {name: "Angelito", age: 4}
    ]
  }
  render(){
    return (
      <div className="App">
      <Person className="person" name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person className="person" name="Tsuki" age="18">She is not here though.</Person>
      <Person className="person" name="Angelito" age="4" />
    </div>
  );
}
}

export default App;
