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
        alert(tile == "mine" ? "BOOM" : "Function Needed")
    }


    const onClickPlayingFalse = (column, row) => {
        setPlaying(true)


        setSafeSquare([column, row])

    }

    return (<div>
        <div>{safeSquare}</div>
        {playing ? <Grid array={createNewMinesweeperGrid(mines, rows, columns, safeSquare)} onClick={onClickPlayingTrue} createRowFunc={(a, b, c, d, e) => { createMinesweeperGameRow(a, b, c, d, e) }} /> :
            <Grid array={createBlankGrid(columns, rows)} onClick={(column, row) => onClickPlayingFalse(column, row)} createRowFunc={(a, b, c, d, e) => { createBlankGameRow(a, b, c, d, e) }} />}    </div>)

}


export default Minesweeper