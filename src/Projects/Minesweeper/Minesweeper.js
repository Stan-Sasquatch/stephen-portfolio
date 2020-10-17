import React, { useState } from 'react';
import MineSweeperGrid from '../../Components/MineSweeperGrid';
import '../../CSS/MineSweeper.css';
import { checkForWin, createStatusGrid, createBlankGrid, adjacentSquaresToReveal } from '../../Utils/Functions';

const Minesweeper = () => {
    const [mines, setMines] = useState(3);
    const [rows, setRows] = useState(5);
    const [columns, setColumns] = useState(5);
    const [playing, setPlaying] = useState(false);
    // const [safeSquare, setSafeSquare] = useState([0, 0])
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


        // resetGrid()

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

        // status == "Mine" ? cleanUp(arr, "lose") : adjacentSquaresToReveal(coords, array).forEach(element => {
        //     revealSquareProp(element, arr)
        // });



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

    return (<div className={"MineSweeperContainer"}>
        {/* status Grid
        <Grid array={statusGrid} tileType={"status"} />
        revealed Grid
        <Grid array={statusGrid} tileType={"revealed"} />

        UI Grid */}
        <MineSweeperGrid array={statusGrid} onClick={playing ? (coords) => playingOnClick(coords, statusGrid) : (safeSquare) => initialOnClick(safeSquare)} playing={playing} onContextMenu={playing ? (e, coords) => onRightClick(e, coords, statusGrid) : (e) => initialRightClick(e)} />
        <button onClick={resetGrid}>Reset</button>

    </div>)

}


export default Minesweeper