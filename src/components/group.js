import React, { useContext, useEffect, useState } from "react";

export default function Group({ item, updateItem }) {

  function handleClick() {
    updateItem({ ...item, value: 42342349999 });
  }

  function handleAddClick() {
    let newItem = {
      id: Date.now(),
      value: 11111111,
      children: []
    };

    updateItem({
      ...item,
      children: [...item.children, newItem]
    });
  }

  function updateNestedItem(index) {
    return (updatedItem) => {
      updateItem({
        ...item,
        children: [
          ...item.children.slice(0, index),
          updatedItem,
          ...item.children.slice(index + 1)
        ]
      });
    };
  }

  return (
    <div className="group" draggable>
      <p>this is value: </p>
      <input value={item.value} readOnly={true}></input>
      <button onClick={handleClick}>Update value</button>
      <button onClick={handleAddClick}>Add Group</button>

      {item.children.map((x, i) => {
        return <Group key={x.id} item={x} updateItem={updateNestedItem(i)} />;
      })}
    </div>
  );
}
