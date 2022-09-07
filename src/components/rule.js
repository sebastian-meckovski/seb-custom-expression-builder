import React, { useState } from "react";
import CreateGuid from "./createGuid";
import FilterType from "./filterType";
import { SelectBox } from "devextreme-react";
import 'devextreme/dist/css/dx.light.css';


export default function Rule(props) {
  const [inputValue, setInputValue] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(props.filterColumns[0]);


  function handleDelete() {
    props.updateItem(null);
  }

  function handleChange(e) {
    setInputValue({
      type: "StringValue",
      value: {
        columnId: CreateGuid(),
        operator: 1,
        name: e.target.value,
        value: "A String",
        description: "A String",
      },
    });
  }

  function handleUpdate() {
    props.updateItem(inputValue);
  }

  return (
    <div style={{ display: "flex" }}>
      <SelectBox items={props.filterColumns} displayExpr={'name'} onValueChanged={ (e)=>{setSelectedColumn(e.value)}} searchEnabled={true}/>  
      <FilterType selectedColumn={selectedColumn}/>
      <input type={"text"} onChange={handleChange} />
      <p>This is rule</p>
      <button onClick={handleUpdate}> Update Rule </button>
      <button onClick={handleDelete}> Delete Rule </button>
    </div>
  );
}
