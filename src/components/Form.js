import React, { Component } from 'react'

const Form = props => {
    return (
        <form>
            <input type="text" value={props.value} placeholder="Type your city" onChange={props.change}></input>
            <button>Search cities</button>
        </form>
    )
}

export default Form;