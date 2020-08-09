import React from 'react';
import Grid from '../../Components/Grid';
import UserNumInput from '../../Components/UserNumInput'
import GenericButton from '../../Components/GenericButton';
import '../../CSS/TileGame.css';
import { createNewGrid, findCoords, coordsExist, coordsAreAdjacent, swapCoords, randomCoords, createTileGameRow } from '../../Utils/Functions';




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
            win: false

        }
    }

    // handleGridUpdate = (axis, value) => {

    //     const newValue = value
    //     let newGrid = createNewGrid(newValue, this.state.columns)
    //     let axisStateProp = "rows"

    //     if (axis == 'column') {
    //         newGrid = createNewGrid(this.state.rows, newValue)
    //         axisStateProp = "columns"
    //     }

    //     this.setState({
    //         [axisStateProp]: newValue,
    //         gridArray: newGrid,
    //         goalArray: newGrid,
    //         playing: false,
    //         seconds: 0,
    //         win: false 
    //     })

    // }


    handleRowUpdate = (event) => {

        this.setState({
            rows: event.target.value,
            gridArray: createNewGrid(event.target.value, this.state.columns),
            goalArray: createNewGrid(event.target.value, this.state.columns),
            playing: false,
            seconds: 0,
            win: false
        })
    }
    handleColumnUpdate = (event) => {

        this.setState({
            columns: event.target.value,
            gridArray: createNewGrid(this.state.rows, event.target.value),
            goalArray: createNewGrid(this.state.rows, event.target.value),
            playing: false,
            seconds: 0,
            win: false
        })
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
            let blankCoords = findCoords("", this.state.gridArray)
            this.setState({ gridArray: swapCoords(randomCoords(this.state.columns, this.state.rows, blankCoords), blankCoords, this.state.gridArray), playing: true })
        }

    }

    tileOnclick = (tileText) => {

        if (tileText !== "" && this.state.playing) {
            const currentCoords = findCoords(tileText, this.state.gridArray)
            const blankCoords = findCoords("", this.state.gridArray)


            if (coordsAreAdjacent(currentCoords, blankCoords)) {

                this.setState({ gridArray: swapCoords(currentCoords, blankCoords, this.state.gridArray), playing: true })



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
            <div className="size-input-container">
                <UserNumInput id="rows input" text="Number of Rows" min={3} max={5} value={this.state.rows} onChange={this.handleRowUpdate} />
                <UserNumInput id="columns input" text="Number of Columns" min={3} max={5} value={this.state.columns} onChange={this.handleColumnUpdate} />
            </div>
            <div className="grid-container" >

                <Grid array={this.state.gridArray} onClick={this.tileOnclick} createRowFunc={(a, b, c) => { createTileGameRow(a, b, c) }} />


                <div className="ui-panel">
                    <GenericButton onClick={this.randomOnClick} text="Randomize" />
                    <div className="timer">{hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</div>
                </div>

            </div>

            {this.state.win && <div>Success!</div>}

        </div>);
    }
}

export default TileGame;