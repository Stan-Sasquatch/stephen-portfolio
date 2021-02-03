import React, { useState } from 'react';
import '../CSS/PenguinPage.css';
const PenguinPage = () => {

    const [colourSchemeState, setcolourScheme] = useState("penguin-one");
    const penguinClick = () => setcolourScheme(colourSchemeState == "penguin-one" ? "penguin-two" : "penguin-one")
    return (<div><Penguin penguinClick={penguinClick} colourScheme={colourSchemeState} />
    </div>);
}

const Penguin = (props) => {

    return (<div ><div onClick={props.penguinClick} className={"penguin " + props.colourScheme}>

        <div className="penguin-bottom">
            <div className="right-hand"></div>
            <div className="left-hand"></div>
            <div className="right-feet"></div>
            <div className="left-feet"></div>
        </div>

        <div className="penguin-top">
            <div className="right-cheek"></div>
            <div className="left-cheek"></div>
            <div className="belly"></div>
            <div className="right-eye">
                <div className="sparkle"></div>
            </div>
            <div className="left-eye">
                <div className="sparkle"></div>
            </div>
            <div className="blush-right"></div>
            <div className="blush-left"></div>
            <div className="beak-top"></div>
            <div className="beak-bottom"></div>
        </div>
    </div >
    </div>
    );
}

export default PenguinPage;