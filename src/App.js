import { createContext, useEffect, useState } from 'react';
import './App.css';
import Group from './components/group';
import builderStructureData from './components/builderStructureData';


export const BuilderContext = createContext();

function App() {

  const [builderStructure, setBuilderStructure] = useState(builderStructureData)

  useEffect(
    ()=> console.log(builderStructure)
  ,[builderStructure])

  return (
    <div className="App">

      {builderStructure.map(x => {
        return(
            <BuilderContext.Provider value={builderStructure} >
              <Group key={x.id} item={x} />
            </BuilderContext.Provider>
        )
      })}
      <button onClick={()=>console.log(builderStructure)}>Click Me</button>
        
    </div>
  );
}

export default App;
