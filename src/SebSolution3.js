import React from "react";

const data = {
    op: 0,
    value: {
      values: [
        {
          op: 0,
          value: {
            values: [
              { op: 2, value: { values: [{ op: 3, value: { values: [] } }] } }
            ]
          }
        },
        { op: 3, value: { values: [{ op: 3, value: { values: [] } }] } }
      ]
    }
  };
  
  const ACTIONS = {
    CHANGE: "change",
    ADD: "add",
    DELETE: "delete"
  };
  
  function SebSolution3() {
    const [mainState, setMainState] = React.useState(data);
  
    const handleChange = (path, value, action) => {
      setMainState((prevState) => {
        return getNestedUpdate(prevState, [...path], value, action);
      });
    };
  
    const performAction = (state, value, action, deleteIndex) => {
      switch (action) {
        case ACTIONS.CHANGE:
          return {
            ...state,
            op: value
          };
        case ACTIONS.ADD:
          return {
            ...state,
            value: {
              ...state.value,
              values: [
                ...state.value.values,
                { op: "new-entry", value: { values: [] } }
              ]
            }
          };
        case ACTIONS.DELETE:
          return {
            ...state,
            value: {
              ...state.value,
              values: state.value.values.filter(
                (item, itemIndex) => itemIndex !== deleteIndex
              )
            }
          };
        default:
          return state;
      }
    };
  
    const getNestedUpdate = (state, path, value, action) => {
      if (path.length === 0) {
        return performAction(state, value, action);
      }
  
      if (action === ACTIONS.DELETE && path.length === 1) {
        return performAction(state, value, action, path.shift(0));
      }
  
      const level = path.shift(0);
  
      return {
        ...state,
        value: {
          ...state.value,
          values: state.value.values.map((item, itemIndex) =>
            itemIndex === level
              ? getNestedUpdate(item, path, value, action)
              : item
          )
        }
      };
    };
  
    return (
      <div>
        {mainState.value.values.map((x, i) => {
          return (
            <RecursiveFn
              key={i}
              value={x}
              path={[i]}
              handleChange={handleChange}
            ></RecursiveFn>
          );
        })}
        <button>Add</button>
        <hr />
        <div>
          <pre>{JSON.stringify(mainState, null, 2)}</pre>
        </div>
      </div>
    );
  }
  
  function RecursiveFn(props) {
    return (
      <div
        style={{
          padding: 5,
          margin: 10,
          paddingLeft: 20,
          border: "1px solid black"
        }}
        key={props.path}
      >
        <div>
          {" "}
          OP -
          <input
            type={"text"}
            value={props.value.op}
            onChange={(e) =>
              props.handleChange(props.path, e.target.value, ACTIONS.CHANGE)
            }
          ></input>
        </div>
        {props.value.value && props.value.value.values
          ? props.value.value.values.map((x, i) => (
              <RecursiveFn
                key={i}
                value={x}
                path={[...props.path, i]}
                handleChange={props.handleChange}
              ></RecursiveFn>
            ))
          : null}
        <button onClick={() => props.handleChange(props.path, null, ACTIONS.ADD)}>
          Add
        </button>
        <button
          onClick={() => props.handleChange(props.path, null, ACTIONS.DELETE)}
        >
          Delete
        </button>
      </div>
    );
  }
  
export default SebSolution3