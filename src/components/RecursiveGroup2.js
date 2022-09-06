import React from "react";

export default function RecursiveGroup2(props){

    function handleAddGroup(){
        console.log('handleAddGroup...')
        console.log(console.log(props.path))
    }

    
    return(
        <div style={{'border': '1px solid black', 'padding': '2px', 'margin': '2px'}}>

            { props.value.value && props.value.value.values ? props.value.value.values.map((x, i) => {
                return (
                  <RecursiveGroup2
                    key={i}
                    value={x}
                    path={[...props.path, i]}
                    performAction ={props.performAction}
                  />
                );
            }) : null }
            <p>Hello</p>
            <button onClick={ () => props.performAction(props.path) } >Add Group</button>

        </div>
    )
}