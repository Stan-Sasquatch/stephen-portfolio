import React from "react";
import Profile_Pic from '../Utils/Profile_Pic2.jpg'
import '../CSS/HomePage.css';
import PenguinPage from './PenguinPage';
const HomePage = () => {

    return (<div className="background">
        <div className="title text-center row">

            <h2 >Stephen's Portfolio </h2>
        </div>
        <div className="row">
            <div className="col-3"></div>
            <div className="list-container text-center col-6">

                <ul>
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

            <div className="text-center container-fluid  right-column col-3">
                <div className="penguin">
                    <PenguinPage />
                </div>


                <div className=" text-center"> Built Using React Version: {React.version}, bootstrap and more!</div>


            </div>







        </div>




    </div>);
}


export default HomePage;