import React from "react";
import Profile_Pic from '../Utils/Profile_Pic.jpg'
import '../CSS/HomePage.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div><h2>Home - React Version:{React.version}</h2>
            <img className="sticky" src={Profile_Pic} alt="Stephen and two friends" /></div>);
    }
}

export default HomePage;