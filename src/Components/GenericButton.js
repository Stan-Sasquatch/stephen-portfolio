import React from 'react'

const GenericButton = (props) => {
    return (<button onClick={props.onClick}>{props.text}</button>);
}

export default GenericButton;