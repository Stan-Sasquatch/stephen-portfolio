import React from 'react'
import './GridRow.css';
const GridRow = (props) => {
    const tileComponents = []


    for (let i in props.rowArray) {
        const className = props.rowArray[i] == "" ? "blank" : ""
        tileComponents.push(<td onClick={() => props.onClick(props.rowArray[i])} id={props.rowArray[i] == "" ? "blank" : props.rowArray[i]} className={className}>{props.rowArray[i]}</td>)
    }

    return (<tr className="row">{tileComponents}</tr>);
}

export default GridRow;