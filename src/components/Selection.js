

import React,{useState} from "react";
import "../styles/Child.css"

const Selection = ({ backgroundColor }) => {
    const [boxColors, setBoxColors] = useState([backgroundColor, backgroundColor, backgroundColor]);


    const handleClick = (index) => {
        // Copy the current state array
        const newBoxColors = [...boxColors];
        // Toggle the background color of the clicked box
        newBoxColors[index] = newBoxColors[index] === backgroundColor ? '' : backgroundColor;
        // Update the state with the new array
        setBoxColors(newBoxColors);
    };


  return (
    <div className="holder">
       {boxColors.map((color, index) => (
                <div
                    key={index}
                    className="fix-box"
                    style={{ backgroundColor: color }}
                    onClick={() => handleClick(index)} // Add onClick event handler
                ></div>
            ))}
    </div>
  );
};

export default Selection;