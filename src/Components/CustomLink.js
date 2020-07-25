import React from 'react';

import {

    Link,
    useRouteMatch
} from "react-router-dom";

import '../CSS/CustomLink.css'

const CustomLink = (props) => {
    let match = useRouteMatch({
        path: props.to,
        exact: props.activeOnlyWhenExact
    });

    return (<li id={props.id} className={match ? "active" : ""} >
        <Link to={props.to} >{props.text}</Link>
    </li>);
}

export default CustomLink;