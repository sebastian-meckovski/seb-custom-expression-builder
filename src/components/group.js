import React, { useContext, useEffect, useState } from "react";
import BuilderContext from '../App'

export default function Group(props){
    const [item, setItem] = useState(props.item)
    const builderStructure = useContext(BuilderContext);
    

    
    let childrenArray = []
    if (item.children){
        item.children.map(x => childrenArray.push(x))
    }
    
    function handleClick(){
        item.value = props.item.value = 42342349999;
        setItem({...item})
    }

    console.log(builderStructure)

    return(
        <div className='group' draggable>
            <p>this is value:  </p>
            <input value={item.value} readOnly={true}></input>
            <button onClick={handleClick}>Update value</button>
         
            {childrenArray.map(x => 
                {   
                    return(
                        <Group key={x.id} item={x} />
                     )}    
            )}

        </div>

        
    )
}