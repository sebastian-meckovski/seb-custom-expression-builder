import React from "react";
import CreateGuid from "./createGuid";
import Rule from "./rule";

export default function Group({ item, updateItem, filterColumns }) {
  function handleAddGroupClick() {
    let newItem = {
      type: "group",
      value: {
        operator: 1,
        values: [],
      },
    };

    if (item.value) {
      updateItem({
        ...item,
        value: {
          ...item.value,
          values: [...item.value.values, newItem],
        },
      });
    } else if (item.values) {
      updateItem({
        ...item,
        values: [...item.values, newItem],
      });
    }
  }

  let newRule = {
    type: null,
    value: [],
  };

  function addNewRule(x) {
    if (item.values) {
      updateItem({
        ...item,
        values: [...item.values, x],
      });
    } else {
      updateItem({
        ...item,
        value: {
          ...item.value,
          values: [...item.value.values, newRule],
        },
      });
    }
  }

  function handleDelete() {
    if (item.values) {
      return;
    } else {
      updateItem(null);
    }
  }
  

  function updateNestedItem(index) {
    return function (updatedItem) {
      if (item.values) {
        if (!updatedItem) {
          updateItem({
            ...item,
            values: [
              ...item.values.slice(0, index),
              ...item.values.slice(index + 1),
            ],
          });
        } else {
          updateItem({
            ...item,
            values: [
              ...item.values.slice(0, index),
              updatedItem,
              ...item.values.slice(index + 1),
            ],
          });
        }
      } else {
        if (updatedItem === null) {
          updateItem({
            ...item,
            value: {
              ...item.value,
              values: [
                ...item.value.values.slice(0, index),
                ...item.value.values.slice(index + 1),
              ],
            },
          });
        } else {
          updateItem({
            ...item,
            value: {
              ...item.value,
              values: [
                ...item.value.values.slice(0, index),
                updatedItem,
                ...item.value.values.slice(index + 1),
              ],
            },
          });
        }
      }
    };
  }

  function changeOperator() {
    if (item.value) {
      if (item.value.operator === 1) {
        updateItem({
          ...item,
          value: {
            ...item.value,
            operator: 0,
          },
        });
      } else if (item.value.operator === 0) {
        updateItem({
          ...item,
          value: {
            ...item.value,
            operator: 1,
          },
        });
      }
    } else if (item) {
      if (item.operator === 1) {
        updateItem({
          ...item,
          operator: 0,
        });
      } else if (item.operator === 0) {
        updateItem({
          ...item,
          operator: 1,
        });
      }
    }
  }

  return (
    <div className="group">
      <p onClick={changeOperator}>
        {item.value
          ? item.value.operator === 1
            ? "AND"
            : "OR"
          : item.operator === 1
          ? "AND"
          : "OR"}
      </p>
      <button onClick={handleAddGroupClick}>Add Group</button>
      <button onClick={() => addNewRule(newRule)}>Add Rule</button>
      <button onClick={handleDelete}> Delete Group </button>

      {item.values
        ? item.values.map((x, i) => {
            if (x) {
              let guid = CreateGuid()
              return x.type === "group" ? (
                <Group
                  key={i}
                  item={x}
                  updateItem={updateNestedItem(i)}
                  filterColumns={filterColumns}
                />
              ) : (
                <Rule
                  key={guid}
                  item={x}
                  index={i}
                  updateItem={updateNestedItem(i)}
                  addNewRule={addNewRule}
                  filterColumns={filterColumns}
                />
              );
            }
          })
        : item.value.values.map((x, i) => {
            if (x) {
              return x.type === "group" ? (
                <Group
                  key={i}
                  item={x}
                  updateItem={updateNestedItem(i)}
                  filterColumns={filterColumns}
                />
              ) : (
                <Rule
                  key={i}
                  item={x}
                  index={i}
                  updateItem={updateNestedItem(i)}
                  addNewRule={addNewRule}
                  filterColumns={filterColumns}
                />
              );
            }
          })}
    </div>
  );
}
