


// Takes two number inputs and returns an array of 'newRowNum' arrays length 'newColumnNum'
// Array contents are the numbers one to '(newRowNum * newColumnNum) - 1', with the final remaining element being "" 
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

