import React from "react";
import '../CSS/AboutPage.css';
import About_Page_Pic from '../Utils/About_Page_Pic.jpg'
import Climbing_Video from '../Utils/Climbing_Video.mp4'



const AboutPage = () => {
    return (<div><div className="text-center container-fluid row">
        <h1 >About Stephen:</h1>
        <div className="container-2 row">

            <div className="container-1 col-5">

                <img className="about-page-pic" src={About_Page_Pic} />
            </div>
            <div className="col-7 p-text">
                <p>I'm 28 years old, originally from Wokingham, with a degree in Mathematics from the University of Sheffield.
                <br />
                My background has led me towards the financial sector, where I currently work, but I have always gravitated to the technical/system side of the companies i've worked in.
                Coding has been a hobby for me up until recently but I now feel i'm ready to transistion into a career in web development.
                <br />
                <br />
                <br />
                <br />
                <br />
                Reach me at <p><a href="mailto:stephenppercival@gmail.com">Stephenppercival@gmail.com</a></p></p>
            </div>
        </div></div><div className="p-text row">
            <div className="col-5">
                <p>
                In my spare time I tend to be running, climbing, coding or playing in my band!
                   
</p>
            </div>
            <div className="col-7">
                <video width="960" height="540" controls>
                    <source src={Climbing_Video} type="video/mp4" />

                    Your browser does not support the video tag.
</video>
            </div>  </div></div>);
}

export default AboutPage;