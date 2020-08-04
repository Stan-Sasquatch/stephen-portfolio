// Takes two number inputs and returns an array of length 'newRowNum', the elements are arrays each with length 'newColumnNum'
//Inner array contents are the numbers one to '(newRowNum * newColumnNum) - 1', with the final remaining element being "" 
export function createNewGrid(newRowNum, newColumnNum) {
    let newGrid = []
    let current = 1
    for (let row = 0; row < newRowNum; row++) {
        let newRow = []

        for (let column = 0; column < newColumnNum; column++) {
            if (current == newRowNum * newColumnNum) {
                newRow.push("")
            }
            else {
                newRow.push(current)
            }
            current++
        }
        newGrid.push(newRow)
    }

    return newGrid
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

