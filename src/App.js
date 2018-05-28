import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'kasun', age:'29'},
      {name:'siva', age:'35'},
      {name:'teena', age:'29'}   
    ],
    othersomthing:'Other Relavent Information'
  };

  swithNames = (namevalue) => {

    this.setState({
      persons:[
        {name:namevalue, age:'29'},
        {name:'siva', age:'35'},
        {name:'teena liyanage', age:'29'}   
      ]
    });  
  }

  render() {
    return (
      <div className="App">
        <h1>This is testing React app</h1>
        <p>sample application for learning</p>
        <button onClick={this.swithNames.bind(this, 'Kasun Tharanga')}>Button</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={this.swithNames.bind(this, 'change from child click')} name={this.state.persons[1].name} age={this.state.persons[1].age}>one of good friend at university</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
