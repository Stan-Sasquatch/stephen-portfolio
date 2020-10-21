import React from "react";
import Profile_Pic from '../Utils/Profile_Pic.jpg'
import '../CSS/HomePage.css';
import PenguinPage from './PenguinPage';
const HomePage = () => {

    const escapedText = `<- that's me in the middle`

    return (<div><div className="flex-container-1"><h1>Home</h1>
        <h2>Website designed using React Version:{React.version}</h2></div>
        <div className="flex-container-2">
            <img className="profile-pic" src={Profile_Pic} alt="Stephen and two friends" />
            <div className="escapedText">
                Hi, I'm Stephen.<br />{escapedText}</div>
            <div className="homePageParagraph">


                Welcome to my website!
                <br />
                Please browse the projects tab to have a look at what i've been coding recently.
                <br />
                Have a look at the about tab for more info about me!

        </div>
            <PenguinPage />
        </div></div>);
}


export default HomePage;