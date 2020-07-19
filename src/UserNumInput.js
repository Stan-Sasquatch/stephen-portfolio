import React from 'react';

const UserNumInput = (props) => {
    return (<label htmlFor={props.id}>{props.text}<input type='number' min={props.min} max={props.max} id={props.id} value={props.value} onChange={props.onChange} />


    </label>);
}

export default UserNumInput;