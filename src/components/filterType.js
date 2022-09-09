import React, { useEffect, useState } from "react";
import { NumberBox, SelectBox, TextBox } from "devextreme-react";
import returnControlType from "./controlTypes";

export default function FilterType(props) {
  let styles = { display: "flex" };

  let selectedColumnType = props.selectedColumn
    ? props.selectedColumn.filterInfo.controlType
    : null;


  switch (selectedColumnType) {
    case 1:
      return (
        <div style={styles}>
          <SelectBox
            items={props.filterOperators}
            displayExpr={"symbol"}
            placeholder={'Select Operator...'}
            value={props.selectedOperator}
            onValueChanged={(e) => {
              props.setSelectedOperator(e.value)
              props.updateItem(
                {
                  type: props.item.type,
                  value: {
                    ...props.item.value,
                    operator: e.value.id
                  }
                }
              )
            }}
          />
          <NumberBox
            value={props.filterValue}
            onValueChanged={(e) => {
              props.setFilterValue(e.value)
              props.updateItem({
                type: props.item.type,
                value: {
                  ...props.item.value,
                  value: e.value ? e.value : null,
                  description: e.value ? e.value.toString() : null
                }
              })
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
