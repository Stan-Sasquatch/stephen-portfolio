import React from 'react'
import GridRow from './GridRow';
import '../CSS/Grid.css';
const Grid = (props) => {
    const rowComponents = []
    for (let i in props.array) {

        rowComponents.push(<GridRow onClick={props.onClick} rowArray={props.array[i]} createRowFunc={props.createRowFunc} row={i} />)
    }

    return (


        <div className="grid"><table><tbody >{rowComponents}</tbody></table></div>);
}

export default Grid;