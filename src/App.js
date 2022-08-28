import 'devextreme/dist/css/dx.light.css';
import { useState } from 'react';
import './App.css';
import Group from './components/group';
import builderStructureData from './components/builderStructureData';



function App() {

  const [builderStructure, setBuilderStructure] = useState(builderStructureData)

  return (
    <div className="App">

      {builderStructure.map(x => {
        return(
          <Group key={x.id} children={x.children} value={x.value} />
        )
      })}
        
    </div>
  );
}

export default App;
