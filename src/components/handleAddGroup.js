import CreateGuid from './createGuid';


export default function handleAddGroup(setBuilderStructure){
    let guid = CreateGuid()
    setBuilderStructure(prevState => {
        return [...prevState, {
            id: guid,
            children: {}
        }]})
  }