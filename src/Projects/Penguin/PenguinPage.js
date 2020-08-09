import React, { useState } from 'react';
import '../../CSS/PenguinPage.css';
const PenguinPage = () => {

    const [colourSchemeState, setcolourScheme] = useState("penguin-one");

    return (<div className="container-one"><Penguin colourScheme={colourSchemeState} />
        <button onClick={() => setcolourScheme(colourSchemeState == "penguin-one" ? "penguin-two" : "penguin-one")}>change my colour!</button> </div>);
}

const Penguin = (props) => {

    return (<div ><div className={"penguin" + " " + props.colourScheme}>

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