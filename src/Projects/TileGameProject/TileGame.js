import React from 'react';
import Grid from './Components/Grid';
import UserNumInput from './Components/UserNumInput'
import GenericButton from './Components/GenericButton';
import './CSS/TileGame.css';
import {createNewGrid,coordsExist} from './Utils/Functions';




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

    handleGridUpdate = (axis, value) => {

        const newValue = value
        let newGrid = createNewGrid(newValue, this.state.columns)
        let axisStateProp = "rows"

        if (axis == 'column') {
            newGrid = createNewGrid(this.state.rows, newValue)
            axisStateProp = "columns"
        }

        this.setState({
            [axisStateProp]: newValue,
            gridArray: newGrid,
            goalArray: newGrid,
            playing: false,
            seconds: 0,
            win: false
        })

    }


   

    swapRandomCoords = () => {
        let coordsArr = []
        const blankCoords = this.findCoords("")

        coordsArr.push([parseInt(blankCoords[0]) + 1, blankCoords[1]])
        coordsArr.push([parseInt(blankCoords[0]) - 1, blankCoords[1]])
        coordsArr.push([blankCoords[0], parseInt(blankCoords[1]) + 1])
        coordsArr.push([blankCoords[0], parseInt(blankCoords[1]) - 1])

        coordsArr = coordsArr.filter((coords)=> coordsExist(coords,this.state.columns,this.state.rows))


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
                <UserNumInput id="rows input" text="Number of Rows" min={3} max={5} value={this.state.rows} onChange={(event)=> this.handleGridUpdate('row',event.target.value)} />
                <UserNumInput id="columns input" text="Number of Columns" min={3} max={5} value={this.state.columns} onChange={(event)=> this.handleGridUpdate('column',event.target.value)} />
                <div>{hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</div>
                {this.state.win && <div>Success!</div>}

            </div>
        </div>);
    }
}

export default TileGame;