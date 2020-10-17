import React from 'react'



function TileComponents(props) {
    let tileComponents = []
    let className
    let text
    let onClickFunction
    let onContextMenuFunction
    for (let i in props.rowArray) {
        const currentCoords = [i, props.row]
        switch (props.tileType) {
            case "status":
                text = props.array[props.row][i].valueToDisplay
                onClickFunction = null
                break;
            case "revealed":
                text = props.array[props.row][i].revealed ? "revealed" : "hidden"
                onClickFunction = null
                break;
            default:

                if (props.array[props.row][i].rightClicked && !props.array[props.row][i].revealed) {
                    className = "rightClicked"
                    text = "!"

                    onClickFunction = null
                }
                else {
                    className = props.array[props.row][i].revealed ? "revealed" : "MS"
                    text = props.array[props.row][i].revealed && props.array[props.row][i].valueToDisplay !== 0 ? props.array[props.row][i].valueToDisplay : ""
                    onClickFunction = props.array[props.row][i].revealed ? null : () => props.onClick(currentCoords)
                }
                onContextMenuFunction = (event) => props.onContextMenu(event, currentCoords)

                break;

        }



        tileComponents.push(<td className={className} id={`${currentCoords}`} onClick={onClickFunction} onContextMenu={onContextMenuFunction}>{text}</td>)

    }


    // switch (props.tileType) {


    //     case "status":

    //         for (let i in props.rowArray) {
    //             const text = props.array[props.row][i].valueToDisplay
    //             const currentCoords = [i, props.row]

    //             tileComponents.push(<td id={`${currentCoords}`} onClick={null}>{text}</td>)

    //         }
    //         break;

    //     case "revealed":
    //         for (let i in props.rowArray) {
    //             const text = props.array[props.row][i].revealed ? "revealed" : "hidden"
    //             const currentCoords = [i, props.row]

    //             tileComponents.push(<td id={`${currentCoords}`} onClick={null}>{text}</td>)

    //         }

    //         break;
    //     default:
    //         for (let i in props.rowArray) {
    //             const text = props.array[props.row][i].revealed ? props.array[props.row][i].valueToDisplay : ""
    //             const currentCoords = [i, props.row]

    //             tileComponents.push(<td id={`${currentCoords}`} onClick={() => props.onClick(currentCoords)}>{text}</td>)

    //         }

    // }



    return tileComponents
}
export default TileComponents