import React from 'react'

const charInput =( props) =>{
    const style ={
        border: "1px solid red",
        display: "inline-block",
        padding: "10px",
        textAlign: "center",
        margin: "10px",

    }
    return(
        <div style={style} onClick={props.clicked}>
        {props.character}    
        </div>
    )
}

export default charInput