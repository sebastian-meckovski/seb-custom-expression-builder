import React, { useEffect, useState } from "react";
import CreateGuid from "./createGuid";
import FilterType from "./filterType";
import { SelectBox } from "devextreme-react";
import filterOperators from "./operators";
import "devextreme/dist/css/dx.light.css";
import returnControlType from "./controlTypes";

export default function Rule(props) {
  let receivedColumn;
  let receivedOperator;
  let receivedFilterValue;
  

  // this is where the issue is at:
  if (props.item.value.columnId) {
    receivedColumn = props.filterColumns.find(x => x.columnId === props.item.value.columnId);
  } else {
    receivedColumn = props.filterColumns[15]
  }
  // debugger
  
  if(props.item.value){
    receivedOperator = filterOperators.find(
      (x) => x.id === props.item.value.operator
    );
    receivedFilterValue = props.item.value.value;

  }

  const [selectedColumn, setSelectedColumn] = useState(receivedColumn);
  const [selectedOperator, setSelectedOperator] = useState(receivedOperator);
  const [filterValue, setFilterValue] = useState(receivedFilterValue);

  function handleDelete() {
    props.updateItem(null);
  }



  return (
    <div style={{ display: "flex" }}>
      <SelectBox
        items={props.filterColumns}
        value={selectedColumn}
        placeholder={"Select a column..."}
        displayExpr={"name"}
        onValueChange={(e) => {

        setSelectedColumn(e);          
          props.updateItem({
            type: returnControlType(e.filterInfo.controlType),
            value: props.item.value,
          });
        }}
        searchEnabled={true}
      />
      <FilterType
        selectedColumn={selectedColumn}
        setSelectedOperator={setSelectedOperator}
        filterOperators={filterOperators}
        selectedOperator={selectedOperator}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        updateItem={props.updateItem}
        item={props.item}
      />
      <button onClick={handleDelete}> Delete Rule </button>
    </div>
  );
}
