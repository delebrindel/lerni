import React from 'react';

const person = (props) =>{
    return(
        <div>
            <h1>I'm {props.name}!</h1>
            <p>My age is {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person