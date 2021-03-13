import React from 'react';
import '../CSS/NavBar.css';
import CustomLink from './CustomLink'

const NavBar = (props) => {

    return (
        <nav className={props.className}>
            <ul className="NavBar">
                {props.linksArr.map(linksObj => <CustomLink id={linksObj.id} text={linksObj.text} to={props.nested ? props.url + linksObj.link : linksObj.link} activeOnlyWhenExact={linksObj.activeOnlyWhenExact} />)}

            </ul>
        </nav>

    );
}

export default NavBar;