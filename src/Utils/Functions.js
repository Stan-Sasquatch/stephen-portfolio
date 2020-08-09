import React from 'react';



export function createNewGrid(newRowNum, newColumnNum) {
    let arr = []

    for (let i = 0; i < (newRowNum * newColumnNum) - 1; i++) {
        arr.push(i + 1)

    }
    arr.push("")


    return elementsToGrid(arr, newRowNum, newColumnNum)

}

// export function createNewGrid(newRowNum, newColumnNum) {
//     let newGrid = []
//     let current = 1
//     for (let row = 0; row < newRowNum; row++) {
//         let newRow = []

//         for (let column = 0; column < newColumnNum; column++) {
//             if (current == newRowNum * newColumnNum) {
//                 newRow.push("")
//             }
//             else {
//                 newRow.push(current)
//             }
//             current++
//         }
//         newGrid.push(newRow)
//     }

//     return newGrid
// }




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

function createNewMinesweeperGrid(mineCount, rows, columns) {
    let arr = []

    if (mineCount <= (rows * columns) - 1) {

        for (let i = 0; i < rows * columns; i++) {
            if (i < mineCount) { arr.push(1) }
            else {
                arr.push(0)
            }


        }
        elementsToGrid(arr, rows, columns)

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


//Returns Random coordinates adjacent to 'blankCoords' that exist in a rows by columns array
export function randomCoords(columns, rows, blankCoords) {
    let coordsArr = []

    coordsArr.push([parseInt(blankCoords[0]) + 1, blankCoords[1]])
    coordsArr.push([parseInt(blankCoords[0]) - 1, blankCoords[1]])
    coordsArr.push([blankCoords[0], parseInt(blankCoords[1]) + 1])
    coordsArr.push([blankCoords[0], parseInt(blankCoords[1]) - 1])

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
