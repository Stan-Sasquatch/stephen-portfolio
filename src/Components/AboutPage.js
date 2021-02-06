import React from "react";
import '../CSS/AboutPage.css';
import About_Page_Pic from '../Utils/About_Page_Pic.jpg'



const AboutPage = () => {
    return (<div className="container-1 text-center container-fluid ">
        <div className="container-2 row">
            <h1>About Stephen:</h1>

            <div className="container-3">
                <p>
                    I'm 28 years old, originally from Wokingham, with a degree in Mathematics from the University of Sheffield.
                <br />In my spare time I tend to be running, climbing, coding or playing in my band!
    <br />
                    My background has led me towards the financial sector, where I currently work, but I have always gravitated to the technical/system side of the companies i've worked in.
                     Coding has been a hobby for me up until recently but I now feel i'm ready to transistion into a career in web development.
</p>
            </div>
            {/* <div className="row container-3"><img className=" img-responsive about-page-pic " src={About_Page_Pic} alt="Stephen in Thailand" /></div> */}
        </div></div>);
}

export default AboutPage;