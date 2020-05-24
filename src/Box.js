import React from "react";
import "./Box.css"

const Box = ({backgroundColor="cyan", width=50, height=50, remove}) => {

    return (
        <>
            <div className="Box" style={{backgroundColor, width, height}}></div>
            <button onClick={remove}>X</button>
        </>
    )
}

export default Box;