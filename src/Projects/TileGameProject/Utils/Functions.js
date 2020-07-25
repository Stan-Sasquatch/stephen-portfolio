function createNewGrid(newRowNum, newColumnNum) {
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
export default createNewGrid
