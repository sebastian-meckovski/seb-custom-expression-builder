import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Group from './components/group';

let builderStructure = [
  {
    id: 123,
    children: []
  },
  {
    id:345,
    children: [
      {
        id: 4123,
        children: []
      },
      {
        id:340235,
        children: []
      }
    ]
  }
]


function App() {
  return (
    <div className="App">

      {builderStructure.map(x => {
        return(
          <Group key={x.id} children={x.children} />
        )
      })}
        
    </div>
  );
}

export default App;
