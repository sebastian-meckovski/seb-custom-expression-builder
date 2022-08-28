import React, { useState } from "react";
import { Button } from 'devextreme-react';

export default function Group(props){
    
    let childrenArray = []
    if (props.children){
        props.children.map(x => childrenArray.push(x))
    }

    return(
        <div className='group' draggable>
            <p>this is value:  </p>
            <input value={props.value} readOnly={true}></input>
            <button>Add Group</button>
         
            {childrenArray.map(x => 
                {   
                    return(
                    <Group key={x.id} children={x.children} value={x.value} />
                )}    
            )}

        </div>

        
    )
}