import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogList from './Container/DogList'
import DogHouse from './Container/DogHouse'

class App extends Component {

    state = {
        dogs: [],
        badDogs: []
    }
    componentDidMount(){
        fetch(`http://localhost:3000/dogs`)
        .then(res => res.json())
        .then(this.loadDogs)
    }

    loadDogs = (dogs) => {
        this.setState({
            dogs: dogs
        })
    }

    badDogClick= (badDog) => {
        console.log(badDog)
        if(!this.state.badDogs.includes(badDog)){
            console.log("false");
            this.setState({
                badDogs: [...this.state.badDogs,badDog]
            })
        }
    }

    goodDogClick = (goodDog) => {
        let filtered = this.state.badDogs.filter(dog => {
            if(dog.id !== goodDog.id){
                return dog
            }
         })
         this.setState({
             badDogs: filtered
         })
    }

  render() {
      console.log(this.state.badDogs);
    return (
      <div className="App">
        <h1>App JS</h1>
        <DogList badDogClick={this.badDogClick} dogs={this.state.dogs}/>
        <DogHouse goodDogClick={this.goodDogClick} badDogs={this.state.badDogs}/>
      </div>
    );
  }
}

export default App;
