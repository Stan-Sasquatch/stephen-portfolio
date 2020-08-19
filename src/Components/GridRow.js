import React from 'react'
import '../CSS/GridRow.css';
const GridRow = (props) => {
    const tileComponents = []

    props.createRowFunc(props.rowArray, tileComponents, props.onClick, props.row, props.array);

    return (<tr className="row">{tileComponents}</tr>);
}

export default GridRow;