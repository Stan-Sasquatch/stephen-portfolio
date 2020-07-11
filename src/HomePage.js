import React from "react";
import Profile_Pic from './Profile_Pic.jpg'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div><h2>Home</h2>
            <img src={Profile_Pic} alt="image isnt displaying for some reason" /></div>);
    }
}

export default HomePage;