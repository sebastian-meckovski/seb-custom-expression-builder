import React, { useState } from "react";

export default function Rule(props) {
  const [inputValue, setInput] = useState('');

  let myValue = {
    type: "StringValue",
    value:{
        columnId: "ff8c5ee3-3e25-46cf-945d-5701cdc3f72e",
        operator: 3,
        name: inputValue,
        value: 50,
        description: "50",
    }
  }

  let deletedValue = { type: "",
                    value:{
                        
                    }}


  function displayValue() {
    console.log(props.value);
  }
  function updateValue(e) {
    props.handleChange(props.path, myValue);
  }
  function deleteValue() {
    props.handleChange(props.path, null);
  }

  return (
    <div style={{ border: "1px solid black", padding: "4px", margin: "4px" }}>
      <p>This is rule </p>
      <input
        value={inputValue}
        type={"text"}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={displayValue}>Display Rule</button>
      <button onClick={updateValue}>Update Rule</button>
      <button onClick={deleteValue}>Delete Rule</button>
    </div>
  );
}
