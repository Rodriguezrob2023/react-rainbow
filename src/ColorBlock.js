//Dependencies
import React from 'react';

//Component
function ColorBlock (props) {
    return (
        <div className="color-block" style={{backgroundColor: props.color}}>
        <p>{props.color}</p>
        </div>
    )
}

//Export Component
export default ColorBlock;