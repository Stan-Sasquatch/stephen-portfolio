import React from 'react'
import TileComponents from './TileComponents'

const MineSweeperGridRow = (props) => {


    return (<tr className="row"><TileComponents rowArray={props.rowArray} row={props.row} array={props.array} tileType={props.tileType} onClick={props.onClick} playing={props.playing} onContextMenu={props.onContextMenu} /></tr>);
}

export default MineSweeperGridRow;