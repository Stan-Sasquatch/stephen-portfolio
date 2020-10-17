import React from 'react'
import MineSweeperGridRow from './MineSweeperGridRow';


const MineSweeperGrid = (props) => {
    const rowComponents = []


    for (let i in props.array) {

        rowComponents.push(<MineSweeperGridRow rowArray={props.array[i]} row={i} array={props.array} tileType={props.tileType} onClick={props.onClick} playing={props.playing} onContextMenu={props.onContextMenu} />)
    }

    return (


        <div className="grid"><table><tbody >{rowComponents}</tbody></table></div>);
}

export default MineSweeperGrid;