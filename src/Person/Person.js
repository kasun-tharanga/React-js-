import React from 'react'
import './Person.css';

const person = (props) => {
    return (
        <div>
            <p className="Person" onClick={props.click}>I`m {props.name} and my age is {props.age} {props.children}</p>            
        </div>
    );
}

export default person;