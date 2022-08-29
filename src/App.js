import { createContext, useEffect, useState } from "react";
import "./App.css";
import Group from "./components/group";
import builderStructureData from "./components/builderStructureData";

export const BuilderContext = createContext();

function App() {
  const [builderStructure, setBuilderStructure] = useState(
    builderStructureData
  );

  useEffect(() => console.log(builderStructure), [builderStructure]);

  function updateItem(index) {
    return (updatedItem) => {
      setBuilderStructure([
        ...builderStructure.slice(0, index),
        updatedItem,
        ...builderStructure.slice(index + 1)
      ]);
    };
  }

  

  return (
    <div className="App">
      {builderStructure.map((x, i) => {
        return (
          <BuilderContext.Provider key={x.id} value={builderStructure}>
            <Group updateItem={updateItem(i)} item={x} />
          </BuilderContext.Provider>
        );
      })}
      <button onClick={() => console.log(builderStructure)}>Click Me</button>
      <pre>{JSON.stringify(builderStructure, null, 2)}</pre>
    </div>
  );
}

export default App;
