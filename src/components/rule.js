import React, { useState } from "react";
import CreateGuid from "./createGuid";

export default function Rule(props) {
  const [inputValue, setInputValue] = useState("");

  console.log(props.filterColumns);

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

  function CheckRule() {
    console.log(props.item);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type={"text"} onChange={handleChange} />
      <p>This is rule</p>
      <button onClick={handleUpdate}> Update Rule </button>
      <button onClick={handleDelete}> Delete Rule </button>
      <button onClick={CheckRule}> Check Rule </button>
    </div>
  );
}
