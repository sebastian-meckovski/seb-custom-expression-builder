import React from "react";

export default function Rule(props){

    function handleDelete(){
        props.updateItem(null)
    }

    return(
        <div style={{"display": "flex"}}>
            <p>This is rule</p>
            <button onClick={handleDelete}> Delete Rule </button>
        </div>
    )
}