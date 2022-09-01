import React from "react";
import CreateGuid from "./createGuid";
import Rule from './rule'

export default function Group({ item, updateItem }) {


  function handleAddGroupClick() {
    let newItem = {
      type: 'group',
      value: {
        operator: 1,
        values: []
      }
    };
    
    if(item.value){
      updateItem({
        ...item,
        value:{
          ...item.value,
          values: [...item.value.values, newItem]
        }
      })
    } 
    else {
      updateItem({
        ...item,
        values: [ ...item.values, newItem]
      });
    }
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

    if(item.values){
      updateItem({
        ...item,
        values: [...item.values, newRule]
      })
    } else {

      updateItem({
        ...item,
        value:{
          ...item.value,
          values: [...item.value.values, newRule]
        }
      })
    }
  }

  function handleDelete(){
    console.log(item.values)
    if(item.values){
      return
    } else {
      updateItem(null)
    }
  }

  function updateNestedItem(index) {
    return (updatedItem) => {
      if(item.values){
        if(updatedItem === null){
          console.log("it's emptyy")
          updateItem({
            ...item,
            values: [
              ...item.values.slice(0, index),
              ...item.values.slice(index + 1)
            ]
          })
        } else{
            updateItem({
              ...item,
              values: [
                ...item.values.slice(0, index),
                updatedItem,
                ...item.values.slice(index + 1)
              ]
            });
          } 
        }
      else {
        if (updatedItem === null){
          console.log("it's emptyy noo")
          updateItem({
            ...item,
            value:{
              ...item.value,
              values: [
                ...item.value.values.slice(0, index),
                ...item.value.values.slice(index + 1)
              ]
            },
          });
        } else {
          updateItem({
            ...item,
            value:{
              ...item.value,
              values: [
                ...item.value.values.slice(0, index),
                updatedItem,
                ...item.value.values.slice(index + 1)
              ]
            },
          });
        }
      }
      }
  }

  return (
    <div className="group" draggable>

      <button onClick={handleAddGroupClick}>Add Group</button>
      <button onClick={addNewRule}>Add Rule</button>
      <button onClick={handleDelete}> Delete Group </button>

      {item.values ? item.values.map((x, i) => {
        if (x){
        return x.type === 'group' ? <Group key={CreateGuid()} item={x} updateItem={updateNestedItem(i)} /> 
          : <Rule key={CreateGuid()} handleDelete={handleDelete} item={x} updateItem={updateNestedItem(i)}/>
        }
      }) : 
      item.value.values.map((x, i) => {
        if (x){
        return x.type === 'group' ? <Group key={CreateGuid()} item={x} updateItem={updateNestedItem(i)} /> 
          : <Rule key={CreateGuid()} handleDelete={handleDelete} item={x} updateItem={updateNestedItem(i)}/>  
        }
      })
      }
    </div>
  );
}
