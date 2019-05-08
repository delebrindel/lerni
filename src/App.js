import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  render(){
    return (
      <div className="App">
      <Person className="person" name="Kaito" age="15" />
      <Person className="person" name="Tsuki" age="18">She is not here though.</Person>
      <Person className="person" name="Angelito" age="4" />
    </div>
  );
}
}

export default App;
