import React, {Component} from 'react'

const Dog = props => {
    return(
        <div onClick={()=>{props.handleClick(props.dog)}} className="dog-item">
            <h3>{props.dog.name}</h3>
            <h4>{props.dog.breed}</h4>
            <img src={props.dog.img}/>
        </div>
    )

}
export default Dog;
