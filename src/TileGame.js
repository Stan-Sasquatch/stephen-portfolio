import React from 'react';
import Grid from './Grid';
import UserNumInput from './UserNumInput'
import GenericButton from './GenericButton';
import './TileGame.css';


class TileGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 4,
            columns: 4,
            gridArray: [["1", "2", "3", "4"],
            ["5", "6", "7", "8"],
            ["9", "10", "11", "12"],
            ["13", "14", "15", ""]],
            goalArray: [["1", "2", "3", "4"],
            ["5", "6", "7", "8"],
            ["9", "10", "11", "12"],
            ["13", "14", "15", ""]],
            playing: false,
            seconds: 0,

        }
    }



    handleRowUpdate = (event) => {

        this.setState({
            rows: event.target.value,
            gridArray: this.updateGrid(event.target.value, this.state.columns),
            goalArray: this.updateGrid(event.target.value, this.state.columns),
            playing: false,
            seconds: 0,
            win: false
        })
    }
    handleColumnUpdate = (event) => {

        this.setState({
            columns: event.target.value,
            gridArray: this.updateGrid(this.state.rows, event.target.value),
            goalArray: this.updateGrid(this.state.rows, event.target.value),
            playing: false,
            seconds: 0,
            win: false
        })
    }

    updateGrid = (newRowNum, newColumnNum) => {
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

    coordsExist = (coords) => {
        return (coords[0] >= 0 && coords[0] < this.state.columns) && (coords[1] >= 0 && coords[1] < this.state.rows)
    }
    swapRandomCoords = () => {
        let coordsArr = []
        const blankCoords = this.findCoords("")

        coordsArr.push([parseInt(blankCoords[0]) + 1, blankCoords[1]])
        coordsArr.push([parseInt(blankCoords[0]) - 1, blankCoords[1]])
        coordsArr.push([blankCoords[0], parseInt(blankCoords[1]) + 1])
        coordsArr.push([blankCoords[0], parseInt(blankCoords[1]) - 1])

        coordsArr = coordsArr.filter(this.coordsExist)


        this.swapCoordsState(coordsArr[Math.floor(Math.random() * (coordsArr.length))], blankCoords)

    }

    randomOnClick = () => {


        var timer =
            setInterval(() => {



                this.setState(prevState => { return { seconds: prevState.seconds + 1 } })
                if (this.state.seconds > 359998 || this.state.win) {

                    clearInterval(timer)
                }

                if (!this.state.win && !this.state.playing) {
                    clearInterval(timer)
                    this.setState({ seconds: 0 })
                }
            }, 1000)

        if (this.state.playing) {
            clearInterval(timer)
        }

        this.setState({ seconds: 0, win: false })
        for (let i = 0; i < 50 * this.state.columns * this.state.rows; i++) {
            this.swapRandomCoords()
        }






    }




    swapCoordsState(a, b) {
        const array = this.state.gridArray
        const aValue = this.state.gridArray[a[1]][a[0]]
        const bValue = this.state.gridArray[b[1]][b[0]]

        array[a[1]][a[0]] = bValue
        array[b[1]][b[0]] = aValue

        this.setState({ gridArray: array, playing: true })
    }

    coordsAreAdjacent(a, b) {

        return ((a[0] == b[0]) && (Math.abs(a[1] - b[1]) == 1))
            || ((a[1] == b[1]) && (Math.abs(a[0] - b[0]) == 1))
    }


    findCoords(text) {
        const coords = [];
        for (let i in this.state.gridArray) {
            if (this.state.gridArray[i].findIndex((num) => num == text) !== -1) {
                coords.push(this.state.gridArray[i].findIndex((num) => num == text), i)
                break
            }
        }
        return coords
    }

    tileOnclick = (tileText) => {

        if (tileText !== "" && this.state.playing) {
            const currentCoords = this.findCoords(tileText)
            const blankCoords = this.findCoords("")


            if (this.coordsAreAdjacent(currentCoords, blankCoords)) {

                this.swapCoordsState(currentCoords, blankCoords)

            }

            if (JSON.stringify(this.state.gridArray) === JSON.stringify(this.state.goalArray)) {

                this.setState({
                    playing: false,
                    win: true
                })
            }



        }

    }


    render() {
        const hours = Math.floor(this.state.seconds / 3600)
        const minutes = Math.floor((this.state.seconds - (hours * 3600)) / 60)
        const seconds = this.state.seconds - (hours * 3600) - (minutes * 60)

        return (<div>

            <div className="grid-container" >
                <div className="grid">
                    <Grid array={this.state.gridArray} onClick={this.tileOnclick} />
                    <GenericButton onClick={this.randomOnClick} text="Randomize" />
                </div>
                <UserNumInput id="rows input" text="Number of Rows" min={3} max={5} value={this.state.rows} onChange={this.handleRowUpdate} />
                <UserNumInput id="columns input" text="Number of Columns" min={3} max={5} value={this.state.columns} onChange={this.handleColumnUpdate} />
                <div>{hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</div>
                {this.state.win && <div>Success!</div>}

            </div>
        </div>);
    }
}

export default TileGame;