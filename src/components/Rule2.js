import React from "react";

export default function Rule2(props){
    console.log(props.i)

    return(
        <div style={{'border': '1px solid black', 'padding': '2px', 'margin': '2px'}}>
            I am Rule
        </div>
    )
}