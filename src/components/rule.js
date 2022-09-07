import React, { useEffect, useState } from "react";
import CreateGuid from "./createGuid";
import FilterType from "./filterType";
import { SelectBox } from "devextreme-react";
import filterOperators from "./operators";
import "devextreme/dist/css/dx.light.css";

export default function Rule(props) {
  const [inputValue, setInputValue] = useState({
    type: "StringValue",
    value: {},
  });
  const [selectedColumn, setSelectedColumn] = useState(props.filterColumns[0]);
  const [selectedOperator, setSelectedOperator] = useState(filterOperators[0]);

  function handleDelete() {
    props.updateItem(null);
  }

  useEffect(() => {
    props.updateItem(inputValue);
  }, [inputValue, selectedOperator]);

  return (
    <div style={{ display: "flex" }}>
      <SelectBox
        items={props.filterColumns}
        value={selectedColumn}
        displayExpr={"name"}
        onValueChanged={(e) => {
          setSelectedColumn(e.value);
        }}
        searchEnabled={true}
      />
      <FilterType
        selectedColumn={selectedColumn}
        setInputValue={setInputValue}
        inputValue={inputValue}
        setSelectedOperator={setSelectedOperator}
        filterOperators={filterOperators}
        selectedOperator={selectedOperator}
      />
      <button onClick={handleDelete}> Delete Rule </button>
    </div>
  );
}
