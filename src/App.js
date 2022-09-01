import { createContext, useEffect, useState } from "react";
import "./App.css";
import Group from "./components/group";
import builderStructureData from "./components/builderStructureData";

export const BuilderContext = createContext();

function App() {
  const [builderStructure, setBuilderStructure] = useState(
    builderStructureData
  );

  function updateItem() {
    return (updatedItem) => {
      console.log(updatedItem.values)
      setBuilderStructure([
        updatedItem
      ]);
    };
  }
  return (
    <div className="App">
      {builderStructure.map((x, i) => {
        return (
            <Group updateItem={updateItem(i)} item={x} key={x}/>
        );
      })}
      <pre>{JSON.stringify(builderStructure[0], null, 2)}</pre>
    </div>
  );
}

export default App;
