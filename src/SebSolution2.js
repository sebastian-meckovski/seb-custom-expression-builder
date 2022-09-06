import React, { useEffect } from "react";
import Rule from "./components/rule";

const data = {
  operator: 0,
  value: {
    values: [],
  },
};

function SebSolution2() {
  const [mainState, setMainState] = React.useState(data);
  const [apiState, setApiState] = React.useState({ operator: 0, values: [] });

  useEffect(() => {
    if (mainState && mainState.value) {
      setApiState((prevState) => ({
        ...prevState,
        values: mainState.value.values,
      }));
      apiState.values = mainState.value.values;
    }
  }, [mainState]);

  const handleChange = (path, value) => {
    console.log(path)
    setMainState((prevState) => {
      return getNestedUpdate(prevState, [...path], value);
    });
  };

  const getNestedUpdate = (state, path, value) => {
    console.log(value);
    if (path.length === 0) {
        if(value === null){
            console.log(state)
            return {}
        }
      return {
        ...state,
        ...value,
        value: {
          name: value.value.name,
          columnId: value.value.columnId,
          description: value.value.description,
          anotherTestval: value.value.anothe
        },
      };
    }
    const level = path.shift(0);
    return {
      ...state,
       value: {
        ...state.value,
        values: state.value.values.map((item, itemIndex) =>
          itemIndex === level ? getNestedUpdate(item, path, value) : item
        ),
      },
    };
  };

  const handleAddItem = (path, value) => {
    setMainState((prevState) => {
      return AddItem(prevState, [...path], value);
    });
  };

  useEffect(
    () => console.log(mainState.value.values),
    [mainState]
  )
  

  const AddItem = (state, path, value) => {
    if(value === null){
      console.log('trying to delete')
      console.log(state.value)

      return {
        ...state
      }
    }

    if (path.length === 0) {
      if (state.value && state.value.values) {
        return {
          ...state,
          value: {
            ...state.value,
            values: [...state.value.values, value],
          },
        };
      } else {

        const arr = [];
        return {
          ...state,
          value: {
            values: [...arr, value],
          },
        };
      }
    }
    const level = path.shift(0);

    return {
      ...state,
      value: {
        ...state.value,
        values: state.value.values.map((item, itemIndex) =>
          itemIndex === level ? AddItem(item, path, value) : item
        ),
      },
    };
  };

  const AddMainItem = () => {
    setMainState((prevState) => ({
      ...prevState,
      value: {
        values: [
          ...prevState.value.values,
          {
            type: "group",
            value: {
              operator: 0,
              values: [],
            },
          },
        ],
      },
    }));
  };
  const AddRuleToMain = () => {
    console.log(mainState)
    setMainState((prevState) => ({
      ...prevState,
      value: {
        values: [
          ...prevState.value.values,
          {
            type: "rule",
            value: {},
          },
        ],
      },
    }));
  };
  return (
    <div>
      <p>{mainState.operator}</p>
      {mainState.value.values &&
        mainState.value.values.map((x, i) => {
          // console.log(i)
          return x.type === "group" ? (
            <RecursiveGroup
              key={i}
              value={x}
              path={[i]}
              handleChange={handleChange}
              handleAddItem={handleAddItem}
            />
          ) : (
            <Rule
              key={i}
              value={x}
              path={[i]}
              handleChange={handleChange}
              handleAddItem={handleAddItem}
            />
          );
        })}
      <button onClick={AddMainItem}>Add Group</button>
      <button onClick={AddRuleToMain}>Add Rule</button>
      <hr />
      <div>
        <pre>{JSON.stringify(apiState, null, 2)}</pre>
      </div>
    </div>
  );
}

function RecursiveGroup(props) {
  return (
    <div
      style={{
        padding: 5,
        margin: 10,
        paddingLeft: 20,
        border: "1px solid black",
      }}
      key={props.path}
    >
      <div>
        <p>{props.value.value.operator}</p>
      </div>
      {props.value.value && props.value.value.values
        ? props.value.value.values.map((x, i) =>
            x.type == "group" ? (
              <RecursiveGroup
                key={i}
                value={x}
                path={[...props.path, i]}
                handleChange={props.handleChange}
                handleAddItem={props.handleAddItem}
              />
            ) : (
              <Rule
                key={i}
                value={x}
                path={[...props.path, i]}
                handleChange={props.handleChange}
                handleAddItem={props.handleAddItem}
              />
            )
          )
        : null}

      <button
        onClick={(e) =>
          props.handleAddItem(props.path, {
            type: "group",
            value: {
              operator: 0,
              values: [],
            },
          })
        }
      >
        Add Group
      </button>
      <button
        onClick={(e) =>
          props.handleAddItem(props.path, {
            type: "",
            value: {}
          })
        }
      >
        Add Rule
      </button>

      <button onClick={
        () => props.handleAddItem(props.path, null)
      }>
        Delete Group
      </button>
    </div>
  );
}

export default SebSolution2;
