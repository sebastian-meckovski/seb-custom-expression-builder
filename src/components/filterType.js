import React from "react";
import { TextBox } from "devextreme-react";

export default function FilterType(filterType){

    let styles={'display': 'flex'}

    console.log(filterType)
    let selectedColumnType = filterType.selectedColumn.filterInfo ? filterType.selectedColumn.filterInfo.controlType : null

    switch(selectedColumnType){
        case 1:
            return (
                <div style={styles}>
                    <p> I'm Type 1 </p>
                    <TextBox/>
                </div>
            )
        case 2:
            return (<p> I'm Type 2 </p>)
        case 3:
            return( <p> I'm Type 3</p>)
        case 5:
            return( <p> I'm Type 5</p>)
        case 6:
            return( <p> I'm Type 6</p>)
        case 7:
            return( <p> I'm Type 7</p>)
        case 11:
            return( <p> I'm Type 11</p>)
        case 12:
            return( <p> I'm Type 12</p>)
        case 28:
            return( <p> I'm Type 28</p>)
        case 29:
            return( <p> I'm Type 29</p>)
        default: return (<p> I'm some other type</p>)
    }

}