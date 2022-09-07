import React, { useState } from "react";
import { NumberBox, SelectBox, TextBox } from "devextreme-react";

export default function FilterType(props) {
  let styles = { display: "flex" };

  console.log(props.thing);

  let selectedColumnType = props.selectedColumn
    ? props.selectedColumn.filterInfo.controlType
    : null;

  console.log(props.selectedColumn);

  switch (selectedColumnType) {
    case 1:
      return (
        <div style={styles}>
          <SelectBox items={props.filterOperators} displayExpr={'symbol'} onValueChanged={ (e) => {props.setSelectedOperator(e.value)} } value={props.selectedOperator}/>
          <NumberBox
            onValueChanged={(e) => {

              props.setInputValue({
                type: "IntValue",
                value: {
                  columnId: props.selectedColumn.columnId,
                  operator: props.selectedOperator.id,
                  name: props.selectedColumn.name,
                  value: e.value,
                  description: e.value.toString(),
                }});
            }}
          />
        </div>
      );
    case 2:
      return <p> I'm Type 2 </p>;
    case 3:
      return <p> I'm Type 3</p>;
    case 5:
      return <p> I'm Type 5</p>;
    case 6:
      return <p> I'm Type 6</p>;
    case 7:
      return <p> I'm Type 7</p>;
    case 11:
      return <p> I'm Type 11</p>;
    case 12:
      return <p> I'm Type 12</p>;
    case 28:
      return <p> I'm Type 28</p>;
    case 29:
      return <p> I'm Type 29</p>;
    default:
      return <p> I'm some other type</p>;
  }
}
