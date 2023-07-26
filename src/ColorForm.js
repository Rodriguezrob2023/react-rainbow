//Dependencies
import React, { useState } from 'react';

//Component
function ColorForm (props) {
    let [input, setInput] = useState('');

    const handleSubmit = (e) => {
    //We still want to eliminate the default behavior of our form submittal
    e.preventDefault()
    //addColor, the function we just built, should be available within props
    props.addColor(input)
}

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text"
                onChange= { (e) => setInput(e.target.value)} />
                <button type="submit">Add Color</button>
            </form>
        </div>
    )
}

//Export Component
export default ColorForm;