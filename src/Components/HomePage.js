import React from "react";
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
                    <div className="col-12 col-sm-3"></div>
                    <div className="text-container text-center col-12 col-sm-6">

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
                    <div className="col-12 col-sm-3">

                <aside className="text-container">
                    <div>
                    Built Using React Version: {React.version}, Bootstrap and more.
                    </div>

                    <div>
                     Take a look at the source code on GitHub 
                       <a href="https://github.com/Stan-Sasquatch/stephen-portfolio"> here:</a>
                    </div>
                    <PenguinPage />
                    </aside>

                    </div>

                </div>
            </div> 
           </div>);
}


export default HomePage;