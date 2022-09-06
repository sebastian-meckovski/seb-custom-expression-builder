import React, { useEffect, useState } from "react";
import RecursiveGroup2 from "./components/RecursiveGroup2";
import Rule2 from "./components/Rule2";

export default function SebSolution4() {
  const [RecursiveData, setRecursiveData] = useState([]);
  const [MainData, setMainData] = useState({ operator: 0, values: [] });

  useEffect(() => {
    setMainData((prevState) => {
      return {
        ...prevState,
        values: RecursiveData ? RecursiveData : prevState.values,
      };
    });
  }, [RecursiveData]);

  function addGroupToMain() {
    setRecursiveData((prevState) => {
      return [
        ...prevState,
        {
          type: "Group",
          value: {
            operator: 0,
            values: [],
          },
        },
      ];
    });
  }

  function performAction(path){
    console.log('adding group..')
    console.log(path)

    let RecursiveDataCopy = RecursiveData;

    RecursiveDataCopy[path].value.values.push({
        type: 'Group',
        value: {
            operator: 0,
            value: []
        }
    })

    console.log(RecursiveDataCopy)



   

  }

  function addRuleToMain() {
    setRecursiveData((prevState) => {
      return [
        ...prevState,
        {
          type: "Rule",
          value: {},
        },
      ];
    });
  }

  return (
    <>
      {MainData.values.map((x, i) => {
        return x.type === "Group" ? (
          <RecursiveGroup2
            key={i}
            value={x}
            RecursiveData={RecursiveData}
            path={[i]}
            performAction={performAction}
          />
        ) : (
          <Rule2 key={i} i={i} />
        );
      })}

      <button onClick={addGroupToMain}>Add Group</button>
      <button onClick={addRuleToMain}>Add Rule</button>
      <pre>{JSON.stringify(MainData, null, 2)}</pre>
    </>
  );
}
