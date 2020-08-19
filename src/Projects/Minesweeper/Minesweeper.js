import React, { useState } from 'react';
import Grid from '../../Components/Grid';
import { createNewMinesweeperGrid, createBlankGrid, createMinesweeperGameRow, createBlankGameRow } from '../../Utils/Functions';

const Minesweeper = () => {
    const [mines, setMines] = useState(7);
    const [rows, setRows] = useState(5);
    const [columns, setColumns] = useState(5);
    const [playing, setPlaying] = useState(false);
    const [safeSquare, setSafeSquare] = useState([0, 0])


    const onClickPlayingTrue = (tile) => {
        alert(tile == "mine" ? "mine" : "safe")
    }


    const onClickPlayingFalse = (row, column) => {
        setPlaying(true)


        setSafeSquare([row, column])
        console.log("on click worked")
    }

    return (<div>
        <div>{safeSquare}</div>
        {playing ? <Grid array={createNewMinesweeperGrid(mines, rows, columns, safeSquare)} onClick={onClickPlayingTrue} createRowFunc={(a, b, c, d) => { createMinesweeperGameRow(a, b, c, d) }} /> :
            <Grid array={createBlankGrid(rows, columns)} onClick={(row, column) => onClickPlayingFalse(row, column)} createRowFunc={(a, b, c, d) => { createBlankGameRow(a, b, c, d) }} />}    </div>)

}


export default Minesweeper