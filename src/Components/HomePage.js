import React from "react";
import Profile_Pic from '../Utils/Profile_Pic.jpg'
import '../CSS/HomePage.css';
import PenguinPage from './PenguinPage';
const HomePage = () => {
    return (<div><div className="flex-container-1"><h1>Home</h1>
        <h2>Website designed using React Version:{React.version}</h2></div>
        <div className="flex-container-2">
            <img className="profile-pic" src={Profile_Pic} alt="Stephen and two friends" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pharetra ex vel feugiat. Proin efficitur lorem arcu, vitae euismod nulla aliquet nec. Praesent vestibulum nibh velit, vitae fringilla lorem tempor in. Phasellus blandit viverra justo sed lacinia. Nulla vel tristique enim. Proin volutpat, sapien in suscipit ullamcorper, lacus nibh elementum tortor, non maximus magna arcu eu dolor. Aliquam ac mattis augue, sed lobortis mauris. Ut sit amet hendrerit ex. In hac habitasse platea dictumst. Nullam commodo laoreet nulla, a volutpat ante. Nam id auctor libero, quis pretium lectus. Nulla eget nunc non odio tincidunt sodales eu non nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Proin sed velit lacus. Morbi in tempus diam. Suspendisse lacinia nibh nec gravida efficitur. Phasellus vitae scelerisque augue. Nam blandit imperdiet ligula, ut aliquam eros facilisis eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce orci diam, pellentesque vel lacus sit amet, condimentum fringilla diam. Vivamus nunc velit, tristique quis massa condimentum, consectetur bibendum neque. Pellentesque vitae euismod magna, at congue metus. Aenean non ligula ante. Suspendisse tincidunt libero eu erat accumsan maximus.

    Aliquam iaculis ornare lectus. Quisque lacinia placerat nisl a facilisis. Donec vitae nisl augue. Proin ut hendrerit nulla, vel mollis purus. Curabitur in arcu auctor, feugiat mi at, scelerisque felis. Mauris maximus ut elit eget congue. Nam dolor magna, scelerisque dapibus pulvinar nec, placerat vitae diam. Cras nec consequat quam. Nulla posuere, nisl a convallis volutpat, elit sem aliquet est, non sollicitudin odio massa eget sapien.
        </p>
            <PenguinPage />
        </div></div>);
}


export default HomePage;