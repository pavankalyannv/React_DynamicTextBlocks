import React from 'react';

const validation =(props) =>{
    let resultText = "Text too short"

    if (props.inputLength >5 ){
        resultText = "Text too Large"
    }
    return(
    <div> 
            <p>{resultText}</p>
    </div>
    );
};

export default validation;
