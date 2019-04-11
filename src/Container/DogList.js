import React, { Component } from 'react';
import Dog from '../Component/Dog'

export default class DogList extends Component {
    loadDogList = () => {
        return this.props.dogs.map(dog => {
            return <Dog handleClick={this.props.badDogClick} dog={dog}/>
        })
    }
    render(){
        return(
            <div className="dog-list">
                <h1>DogList</h1>
                {this.loadDogList()}
            </div>
        )
    }
}
