import React, { useState } from "react";
import { Button } from 'devextreme-react';
import handleAddGroup from "./handleAddGroup";

export default function Group(props){
    const [builderStructure, setBuilderStructure] = useState([]);
    
    
    function handleClick(){
        handleAddGroup(setBuilderStructure)
    }
    
    let childrenArray = []
    if (props.children){
        props.children.map(x => childrenArray.push(x))
    }

    return(
        <div className='group' draggable>
            <Button text='Add Rule' />
            <Button text='Add Group' onClick={handleClick}/>
         
            {childrenArray.map(x => 
                {return(
                    <Group/>
                )}    
            )}

        </div>

        
    )
}