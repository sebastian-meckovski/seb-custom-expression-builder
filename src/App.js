import { createContext, useEffect, useState } from "react";
import "./App.css";
import Group from "./components/group";
import builderStructureData from "./components/builderStructureData";
import IPReports from "./components/IP Reports.json";

export const BuilderContext = createContext();
let receivedColumns = IPReports[0].columns;

function App() {
  const [builderStructure, setBuilderStructure] =
    useState(builderStructureData);
  const [filterColumns, setFilterColumns] = useState([]);

  useEffect(() => {
    receivedColumns.forEach((x) => {
      if (x.filterInfo && x.filterInfo.isFilter) {
        setFilterColumns((prevState) => {
          return [...prevState, x];
        });
      }
    });
  }, []);

  function updateItem() {
    return (updatedItem) => {
      setBuilderStructure([updatedItem]);
    };
  }
  return (
    <div className="App">
      {builderStructure.map((x, i) => {
        return (
          <div style={{ border: "1px dotted black" }}>
            <Group updateItem={updateItem(i)} item={x} key={i} filterColumns={filterColumns} />
            <button
              onClick={() => {
                console.log(filterColumns);
              }}
            >
              Click Me
            </button>
          </div>
        );
      })}
      <pre>{JSON.stringify(builderStructure[0], null, 2)}</pre>
    </div>
  );
}

export default App;
