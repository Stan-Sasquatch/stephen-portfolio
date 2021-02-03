import React from "react";
import Profile_Pic from '../Utils/Profile_Pic2.jpg'
import '../CSS/HomePage.css';
import PenguinPage from './PenguinPage';
const HomePage = () => {



    return (<div className="background"><h1>Home</h1>
        <h2 className="text-center">Website designed using React Version:{React.version}</h2>
        <div className="text-center container-fluid">
            <img className="profile-pic img-responsive" src={Profile_Pic} alt="Stephen at home" />

            <div >


                Hi, I'm Stephen. Welcome to my website! (that's me in the middle)
                <br />
                Please browse the projects tab to have a look at what i've been coding recently.
                <br />
                Have a look at the about tab for more info about me!
                <PenguinPage />
            </div>



        </div></div>);
}


export default HomePage;