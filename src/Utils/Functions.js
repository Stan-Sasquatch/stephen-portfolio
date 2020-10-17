import React from 'react';



export function createNewGrid(newRowNum, newColumnNum) {
    let arr = []

    for (let i = 0; i < (newRowNum * newColumnNum) - 1; i++) {
        arr.push(i + 1)

    }
    arr.push("")


    return elementsToGrid(arr, newRowNum, newColumnNum)

}


function elementsToGrid(elementArray, rows, columns) {
    if (elementArray.length == rows * columns) {
        let newGrid = []


        for (let row = 0; row < rows; row++) {
            let newRow = []

            for (let column = 0; column < columns; column++) {


                newRow.push(elementArray[column + (row * columns)])

            }
            newGrid.push(newRow)
        }

        return newGrid
    }
    else { alert("Stan Error: incorrect array size") }
}

export function createBlankGrid(rows, columns, filler) {
    const arr = Array(rows * columns).fill(filler)
    return elementsToGrid(arr, rows, columns)
}

export function createNewMinesweeperGrid(mineCount, rows, columns, safeSquare) {
    let arr = []

    if (mineCount <= (rows * columns) - 1) {

        for (let i = 0; i < rows * columns; i++) {
            if (i < mineCount) { arr.push(1) }
            else {
                arr.push(0)
            }


        }

        arr = elementsToGrid(arr, rows, columns)


        for (let i = 0; i < 50; i++) {
            randomize(arr)
        }

        do {
            randomize(arr)
        }
        while (arr[safeSquare[1]][safeSquare[0]] == 1)
        return arr
    }
    else alert("too many mines for this grid size")


}


//Takes an array of length 2 containing two numbers and two numbers as params
//Does the coordinate pair of the array exist within a 'columns * rows' grid where coordinates start at 0?
//returns boolean 
export function coordsExist(coords, columns, rows) {
    return (coords[0] >= 0 && coords[0] < columns) && (coords[1] >= 0 && coords[1] < rows)
}
//Finds the coordinates of an element equal to 'text' in array 'arr
export function findCoords(text, arr) {
    const coords = [];
    for (let i in arr) {
        if (arr[i].findIndex((num) => num == text) !== -1) {
            coords.push(arr[i].findIndex((num) => num == text), i)
            break
        }
    }
    return coords
}

function randomize(arr) {
    const rows = arr.length
    const columns = arr[0].length

    const coordsOne = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)]
    const coordsTwo = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)]

    swapCoords(coordsOne, coordsTwo, arr)


}
export function coordsAreAdjacent(a, b) {

    return ((a[0] == b[0]) && (Math.abs(a[1] - b[1]) == 1))
        || ((a[1] == b[1]) && (Math.abs(a[0] - b[0]) == 1))
}

export function swapCoords(a, b, arr) {
    const aValue = arr[a[1]][a[0]]
    const bValue = arr[b[1]][b[0]]

    arr[a[1]][a[0]] = bValue
    arr[b[1]][b[0]] = aValue
    return arr

}


//Returns Random coordinates adjacent to 'targetCoords' that exist in a rows by columns array
export function randomCoords(columns, rows, targetCoords) {
    let coordsArr = []

    coordsArr.push([parseInt(targetCoords[0]) + 1, targetCoords[1]])
    coordsArr.push([parseInt(targetCoords[0]) - 1, targetCoords[1]])
    coordsArr.push([targetCoords[0], parseInt(targetCoords[1]) + 1])
    coordsArr.push([targetCoords[0], parseInt(targetCoords[1]) - 1])

    coordsArr = coordsArr.filter((e) => coordsExist(e, columns, rows))
    return coordsArr[Math.floor(Math.random() * (coordsArr.length))]
}


export function createTileGameRow(rowArray, tileComponents, onClick) {

    for (let i in rowArray) {
        const className = rowArray[i] == "" ? "blank" : ""
        tileComponents.push(<td onClick={() => onClick(rowArray[i])} id={rowArray[i] == "" ? "blank" : rowArray[i]} className={className}>{rowArray[i]}</td>)
    }
    return tileComponents
}
export function createMinesweeperGameRow(rowArray, tileComponents, onClick, row, arr, safeSquare, columns, rows, revealedGrid) {


    for (let i in rowArray) {
        const currentCoords = [i, row]

        const revealed = coordsAreRevealed(currentCoords, revealedGrid)

        const status =

            rowArray[i] == 1 ? "mine" : minesAdjacentToCoordsInArr(currentCoords, arr, columns, rows)

        tileComponents.push(<td onClick={() => onClick(status, currentCoords, columns, rows)} id={`${currentCoords}`} className={revealed ? "revealed" : "blank"} value={status}>{revealed ? status : ""}</td>)




    }





    return tileComponents
}

const coordsAreRevealed = (currentCoords, revealedGrid) => {

    return revealedGrid[currentCoords[0]][currentCoords[1]]



}

export function createBlankGameRow(rowArray, tileComponents, onClick, row) {


    const status = "blank"


    for (let i = 0; i < rowArray.length; i++) {
        tileComponents.push(<td onClick={() => { onClick(i, row) }} id={status} className={status} value={status}>{status}</td>)

    }
    return tileComponents

}

const minesAdjacentToCoordsInArr = (coords, arr, columns, rows) => {


    let total = 0
    let column = coords[0]
    let row = coords[1]
    const adjacentTotal = (column, row, arr) => {
        if (coordsExist([column, row], columns, rows)) {

            return arr[row][column]
        }
        return 0
    }
    row--

    total += adjacentTotal(column, row, arr)
    column++

    total += adjacentTotal(column, row, arr)
    row++

    total += adjacentTotal(column, row, arr)
    row++

    total += adjacentTotal(column, row, arr)
    column--

    total += adjacentTotal(column, row, arr)
    column--

    total += adjacentTotal(column, row, arr)
    row--

    total += adjacentTotal(column, row, arr)
    row--

    total += adjacentTotal(column, row, arr)
    return total
}

export function revealSquare(coords, revealedGrid, setRevealedGrid) {
    // document.getElementById(coords).textContent = status;
    // document.getElementById(coords).className = "revealed"
    revealedGrid[coords[0]][coords[1]] = true
    setRevealedGrid(revealedGrid)
}


const findAdjacentSquares = (coords) => {

    const x = parseInt(coords[0], 10);
    const y = parseInt(coords[1], 10)

    return [[x, y - 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
    [x, y + 1],
    [x - 1, y + 1],
    [x - 1, y],
    [x - 1, y - 1]]
}

// export function revealAdjacentSquares(coords, columnsTotal, rowsTotal) {

//     let coordsToCheckSet = new Set(findAdjacentSquares(coords))
//     // console.log(coordsToCheckSet)
//     coordsToCheckSet.forEach((e) => checkAndReveal(e, columnsTotal, rowsTotal, coordsToCheckSet))


// }

// const checkAndReveal = (coords, columnsTotal, rowsTotal, checkSet) => {

//     if (coordsExist(coords, columnsTotal, rowsTotal)) {
//         const stringCoords = `${coords[0]},${coords[1]}`

//         const currentStatus = document.getElementById(stringCoords).value

//         if (currentStatus !== "mine") {
//             revealSquare(currentStatus, coords)

//             if (currentStatus == "0") { findAdjacentSquares(coords).forEach(checkSet.add(coords)) }

//         }


//     }

// }

export function checkForWin(statusGrid) {


    const isRevealed = (element) => { return element.revealed }

    const rowWin = (arr) => { return arr.filter(element => element.valueToDisplay !== "Mine").every(isRevealed) }






    return statusGrid.every(rowWin)
}

export function createStatusGrid(mineCount, rows, columns, safeSquare) {



    let statusGrid = []
    const minesGrid = createNewMinesweeperGrid(mineCount, rows, columns, safeSquare)

    for (let i = 0; i < minesGrid.length; i++) {
        let statusGridRow = []

        for (let j = 0; j < minesGrid[i].length; j++) {

            const currentCoords = [j, i]

            const display = minesGrid[i][j] == 1 ? "Mine" : minesAdjacentToCoordsInArr(currentCoords, minesGrid, columns, rows)
            const reveal = currentCoords.toString() === safeSquare.toString()

            statusGridRow.push({ valueToDisplay: display, revealed: reveal, rightClicked: false })

        }
        statusGrid.push(statusGridRow)
    }

    return statusGrid
}


export function adjacentSquaresToReveal(coords, arr) {



    const arrayValueAtCoords = (array, coordinates) => {

        return coordinates.length > 0 ? array[coordinates[1]][coordinates[0]].valueToDisplay : "empty"



    }

    const rows = arr.length
    const columns = arr[0].length

    const allAdjacentCoords = (coords, rows, columns) => {
        const adjacentSquares = []
        let column = parseInt(coords[0], 10)
        let row = parseInt(coords[1], 10)


        const pushCoords = (column, row, columns, rows) => {
            let current = [column, row]
            if (coordsExist(current, columns, rows)) {
                adjacentSquares.push(current)
            }
        }
        row--
        pushCoords(column, row, columns, rows)
        column++
        pushCoords(column, row, columns, rows)
        row++
        pushCoords(column, row, columns, rows)
        row++
        pushCoords(column, row, columns, rows)
        column--
        pushCoords(column, row, columns, rows)
        column--
        pushCoords(column, row, columns, rows)
        row--
        pushCoords(column, row, columns, rows)
        row--
        pushCoords(column, row, columns, rows)

        return adjacentSquares

    }


    let toReveal = allAdjacentCoords(coords, rows, columns).filter(element => arrayValueAtCoords(arr, element) == 0)
    let zeroArray = [...toReveal]

    const customArrIncludes = (arrToCheck, element) => {

        const has = (a) => { return JSON.stringify(a) === JSON.stringify(element) }


        return arrToCheck.some(has)

    }



    let i = 0;
    do {

        if (zeroArray.length > 0) {

            const currentAdj = allAdjacentCoords(zeroArray[i], rows, columns)

            for (let j in currentAdj) {

                if (!customArrIncludes(toReveal, currentAdj[j])) {
                    toReveal.push(currentAdj[j])
                }
                if (arrayValueAtCoords(arr, currentAdj[j]) == 0) {


                    if (!customArrIncludes(zeroArray, currentAdj[j])) {

                        zeroArray.push(currentAdj[j])

                    }


                }

            }


        }

        i++
    }
    while (i < zeroArray.length)





    return toReveal
}