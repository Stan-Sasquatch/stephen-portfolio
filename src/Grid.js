import React from 'react'
import GridRow from './GridRow';
import './Grid.css';
const Grid = (props) => {
    const rowComponents = []
    for (let i in props.array) {

        rowComponents.push(<GridRow onClick={props.onClick} rowArray={props.array[i]} />)
    }

    return (


        <table><tbody>{rowComponents}</tbody></table>);
}

export default Grid;