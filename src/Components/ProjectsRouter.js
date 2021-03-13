
import TileGame from '../Projects/TileGameProject/TileGame'
import Minesweeper from '../Projects/Minesweeper/Minesweeper'
import WeatherPage from './WeatherPage';
import Navbar from './NavBar';
import React from "react";
import {
  Switch,
  Route,
  useRouteMatch

}from "react-router-dom";



function ProjectsRouter() {

    let { path, url } = useRouteMatch();
    let myURL = url
  
    const projectsArr = [
      { id: "Tile Game", text: "Tile Game", link: "/tilegame", component: () => { return <TileGame /> } },
      { id: "Minesweeper", text: "Minesweeper", link: "/minesweeper", component: () => { return <Minesweeper /> } },
      { id: "Weather", text: "Weather", link: "/weather", component: () => { return <WeatherPage /> } }
    ]
  
    return (
      <div>
        <h2>Projects</h2>
        <Navbar linksArr={projectsArr} url={myURL} nested={true} />
        <div>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a project.</h3>
          </Route>
          {projectsArr.map(projectObj => <Route path={path + projectObj.link} >{projectObj.component}</Route>)}
        </Switch>
        </div>
      </div>
    );
  }
  export default ProjectsRouter;