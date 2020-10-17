import React, { useState } from 'react';
import MineSweeperGrid from '../../Components/MineSweeperGrid';
import RadioButtonGroup from '../../Components/RadioButtonGroup';
import '../../CSS/MineSweeper.css';
import { checkForWin, createStatusGrid, createBlankGrid, adjacentSquaresToReveal } from '../../Utils/Functions';

const Minesweeper = () => {
    const [mines, setMines] = useState(4);
    const [rows, setRows] = useState(6);
    const [columns, setColumns] = useState(6);
    const [playing, setPlaying] = useState(false);
    const [difficulty, setDifficulty] = useState("Easy")
    const [statusGrid, setStatusGrid] = useState(createBlankGrid(rows, columns, { valueToDisplay: "", revealed: false }))
    const resetGrid = () => {
        setStatusGrid(createBlankGrid(rows, columns, { valueToDisplay: "", revealed: false, rightClicked: false }))
        setPlaying(false)
    }

    const revealSquareProp = (coords, arr) => {

        arr[coords[1]][coords[0]].revealed = true
        return arr
    }

    const rightClickedSquarePropToggle = (coords, arr) => {

        arr[coords[1]][coords[0]].rightClicked = !arr[coords[1]][coords[0]].rightClicked
        return arr
    }


    const initialOnClick = (safeSquare) => {

        let arr = createStatusGrid(mines, rows, columns, safeSquare)


        adjacentSquaresToReveal(safeSquare, arr).forEach(element => {
            revealSquareProp(element, arr)
        });

        if (checkForWin(arr)) {

            setStatusGrid(arr)

            alert("You Win!")
            if (cleanUp(arr, "win")) { return }
        }

        else {
            setStatusGrid(arr)

            setPlaying(true)
        }
    }


    const cleanUp = (arr, message) => {

        for (let i = 0; i < rows; i++) {

            for (let j = 0; j < columns; j++) {

                const coord = [j, i]
                revealSquareProp(coord, arr)

            }


        }

        setStatusGrid(arr)



        alert(`You ${message}!`)




        return true
    }

    const playingOnClick = (coords, array) => {
        let arr = array.slice()


        const status = array[coords[1]][coords[0]].valueToDisplay

        if (status == "Mine") {
            if (cleanUp(arr, "lose")) { return }
        }
        else {
            adjacentSquaresToReveal(coords, array).forEach(element => {
                revealSquareProp(element, arr)
            })
        }


        if (checkForWin(revealSquareProp(coords, arr))) {

            setStatusGrid(revealSquareProp(coords, arr)
            )

            if (cleanUp(arr, "win")) { return }
        }

        else {
            setStatusGrid(revealSquareProp(coords, arr)
            )

        }
    }

    const onRightClick = (e, coords, array) => {
        let arr = array.slice()

        e.preventDefault()

        setStatusGrid(rightClickedSquarePropToggle(coords, arr))


    }

    const initialRightClick = (e) => {
        e.preventDefault()
    }

    const difficultyOnChange = (event) => {
        let newRows
        let newColumns
        let newMines

        const newDifficulty = event.target.value
        const updateDifficulty = (newRows, newColumns, newMines) => {
            setRows(newRows)
            setColumns(newColumns)
            setMines(newMines)

        }

        switch (newDifficulty) {
            case "Easy":
                newRows = 6
                newColumns = 6
                newMines = 4


                break

            case "Medium":
                newRows = 8
                newColumns = 8
                newMines = 10

                break

            case "Hard":
                newRows = 10
                newColumns = 10
                newMines = 25

                break

        }

        updateDifficulty(newRows, newColumns, newMines)

        setDifficulty(newDifficulty)

        setStatusGrid(createBlankGrid(newRows, newColumns, { valueToDisplay: "", revealed: false, rightClicked: false }))
        setPlaying(false)
    }

    return (<div className={"MineSweeperContainer"}>
        <RadioButtonGroup current={difficulty} onChange={difficultyOnChange} structure={["Difficulty", ["Easy", "Medium", "Hard"]]} />
        <MineSweeperGrid array={statusGrid} onClick={playing ? (coords) => playingOnClick(coords, statusGrid) : (safeSquare) => initialOnClick(safeSquare)} playing={playing} onContextMenu={playing ? (e, coords) => onRightClick(e, coords, statusGrid) : (e) => initialRightClick(e)} />
        <button onClick={resetGrid}>Reset</button>

    </div>)

}


export default Minesweeper