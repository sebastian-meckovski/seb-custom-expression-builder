import React, { useEffect, useState } from "react";
import CreateGuid from "./createGuid";
import FilterType from "./filterType";
import { SelectBox } from "devextreme-react";
import filterOperators from "./operators";
import "devextreme/dist/css/dx.light.css";
import returnControlType from "./controlTypes";

export default function Rule(props) {
  const [inputValue, setInputValue] = useState({
    type: null,
    value: {},
  });
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [filterType, setFilterType] = useState()

  function handleDelete() {
    props.updateItem(null);
  }

  useEffect(() => {
    props.updateItem(inputValue);
  }, [filterValue, selectedOperator, inputValue]);

  return (
    <div style={{ display: "flex" }}>
      <SelectBox
        items={props.filterColumns}
        value={selectedColumn}
        placeholder={'Select a column...'}
        displayExpr={"name"}
        onValueChanged={(e) => {
          console.log('Ive changed!')
          setSelectedColumn(e.value);
          setInputValue({  
              type: returnControlType(e.value.filterInfo.controlType),
              value: {}
            })
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
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <button onClick={handleDelete}> Delete Rule </button>
    </div>
  );
}
