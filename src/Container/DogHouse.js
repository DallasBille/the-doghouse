import React, { Component } from 'react';
import Dog from '../Component/Dog'

export default class DogHouse extends Component {

    loadBadDogs = () => {
        return this.props.badDogs.map(dog => {
            return <Dog handleClick={this.props.goodDogClick} dog={dog}/>
        })
    }

    render(){
        return(
            <div className="dog-house">
                <h1>Dog House</h1>
                <h2>Where the Bad Dogs Go</h2>
                {this.loadBadDogs()}
            </div>
        )
    }
}
