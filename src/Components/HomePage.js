import React from "react";
import Profile_Pic from '../Utils/Profile_Pic2.jpg'
import '../CSS/HomePage.css';
import PenguinPage from './PenguinPage';
const HomePage = () => {

    return (
        <div>
            <div className="background">
                <div className="title text-center row">

                    <h2 >Stephen's Portfolio </h2>
                </div>
                <div className="row">
                    <div className="col-3 "></div>
                    <div className="text-container text-center col-6">

                        <ul >
                            <div >
                                <li >
                                    Background in Mathematics, Finance and Data Handling
</li>
                            </div>
                            <div>
                                <li>
                                    Proficient in HTML, CSS, JavaScript and React
</li>
                            </div>
                            <div>
                                <li>
                                    Passionate about self-improvement
</li>
                            </div>
                            <div>
                                <li>
                                    Motivated to put the work in to learn new technologies
</li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-3">

                <aside className="text-container">Built Using React Version: {React.version}, bootstrap and more!</aside>

                    </div>

                </div>
                <div className="row">
                    <div className="col-3 text-center right-column">

                        <div className="penguin-pic">
                            <PenguinPage />
                        </div>

                    </div>
                    <div className="col-6">
                    </div>
                    <div className="col-3 ">

                    </div>

                </div>




            </div> 
           </div>);
}


export default HomePage;