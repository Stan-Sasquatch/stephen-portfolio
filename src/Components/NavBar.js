import React from 'react';



import '../CSS/NavBar.css';
import CustomLink from './CustomLink'

const NavBar = () => {

    return (
        <nav>
            <ul>
                <CustomLink id="homeLink" text="Home" to="/" activeOnlyWhenExact={true} />
                <CustomLink id="aboutLink" text="About" to="/about" />
                <CustomLink id="projectsLink" text="Projects" to="/projects" />
            </ul>
        </nav>

    );
}

export default NavBar;