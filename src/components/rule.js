import React, { useEffect, useState } from "react";
import CreateGuid from "./createGuid";

export default function Rule(props){
    const [inputValue, setInputValue] = useState("")
    function handleDelete(){
        props.updateItem(null)
    }

    function handleChange(e){
        setInputValue(e.target.value)

        let ruleValue = {
            columnId: CreateGuid(),
            operator: 1,
            name: inputValue,
            value: "A String",
            description: "A String"
        }

        let newRule ={
            type: 'StringValue',
            value: ruleValue,
        }
        console.log(newRule)

    }

    useEffect( ()=> {
        let ruleValue = {
            columnId: CreateGuid(),
            operator: 1,
            name: inputValue,
            value: "A String",
            description: "A String"
        }

        let newRule ={
            type: 'StringValue',
            value: ruleValue,
          }
        
        if(props.item.values){
        props.updateItem({
            ...props.item,
            values: [...props.item.values, newRule]
            })
        console.log(newRule)
        }
    }
        ,[inputValue])

    return(
        <div style={{"display": "flex"}}>
            <input type={'text'} value={inputValue} onChange={handleChange} />
            <p>This is rule</p>
            <button onClick={handleDelete}> Delete Rule </button>
        </div>
    )
}