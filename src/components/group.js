import React from "react";
import CreateGuid from "./createGuid";
import Rule from './rule'

export default function Group({ item, updateItem }) {


  function handleAddGroupClick() {
    let newItem = {
      type: 'group',
      values: []
    };

    updateItem({
      ...item,
      values: [ ...item.values, newItem]
    });
  }

  function addNewRule(){

    let ruleValue = {
      columnId: CreateGuid(),
      operator: 1,
      name: "External Reference (Patient)",
      value: "A String",
      description: "A String"
    }

    let newRule ={
      type: 'StringValue',
      value: ruleValue,
    }
    updateItem({
      ...item,
      values: [newRule, ...item.values]
    })
  }

  function updateNestedItem(index) {
    return (updatedItem) => {
      updateItem({
        ...item,
        values: [
          ...item.values.slice(0, index),
          updatedItem,
          ...item.values.slice(index + 1)
        ]
      });
    };
  }

  return (
    <div className="group" draggable>

      <button onClick={handleAddGroupClick}>Add Group</button>
      <button onClick={addNewRule}>Add Rule</button>

      {item.values ? item.values.map((x, i) => {
        return x.type === 'group' ? <Group key={CreateGuid()} item={x} updateItem={updateNestedItem(i)} /> : <Rule key={x.value.columnId}/>
      }) : null}
    </div>
  );
}
