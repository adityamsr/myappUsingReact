import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'ryu', age: 30, belt: 'blue', id:1 },
      { name: 'sayu', age: 20, belt: 'black', id:2 },
      { name: 'mayu', age: 25, belt: 'green', id:3 }
    ]
  }
  
addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];  //this is the use of the spread operator, and its a carbon cpy of the above array
    this.setState({
        ninjas: ninjas
    })
}

deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter( ninja => {
      return ninja.id !== id
    });
    this.setState ({
        ninjas: ninjas
    })
}

componentDidMount(){
  console.log('component mounted')
}

coomponentDidUpdate(prevProps, prevState){
  console.log('component updated');
  console.log(prevProps, prevState);
}
  render () {
     return (
    <div className="App">
      <h1> WELCOME MY FIRST REACT APP! </h1>
      <p> Welcome :) </p> 
      <Ninjas  deleteNinja = { this.deleteNinja } ninjas = {this.state.ninjas} />
      <AddNinja addNinja={this.addNinja} />

    </div>  
    );
  }
}

export default App; 
 