import { createContext, useEffect, useState } from "react";
import "./App.css";
import Group from "./components/group";
import builderStructureData from "./components/builderStructureData";
import IPReports from "./components/IP Reports.json";

export const BuilderContext = createContext();
let receivedColumns = IPReports[0].columns;

function App() {
  const [builderStructure, setBuilderStructure] = useState(builderStructureData);
  let filterColumns = [];
  // debugger

  receivedColumns.forEach((x) => {
    if (
      x.filterInfo &&
      x.filterInfo.isFilter &&
      x.filterInfo.controlType !== null
    ) {
      filterColumns.push(x);
    }
  });

  function updateItem(e) {
    // debugger  
      setBuilderStructure([e])
  }

  // debugger
  return (
    <div className="App">
          <div style={{ border: "1px dotted black" }}>
            <Group
              updateItem={updateItem}
              item={builderStructure[0]   }
              key={builderStructure.length}
              filterColumns={filterColumns}
              setBuilderStructure={setBuilderStructure}
            />
          </div>
      <pre>{JSON.stringify(builderStructure[0], null, 2)}</pre>
    </div>
  );
}

export default App;
