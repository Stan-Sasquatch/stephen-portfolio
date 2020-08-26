import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import HomePage from './Components/HomePage';
import WeatherBar from './Components/WeatherBar';
import Project from './Components/Project';
import Navbar from './Components/NavBar';
import './CSS/App.css';
import CustomLink from './Components/CustomLink'
import TileGame from './Projects/TileGameProject/TileGame'
import PenguinPage from './Components/PenguinPage'
import Minesweeper from './Projects/Minesweeper/Minesweeper'



export default function App() {


  return (<div className="app">
    <HashRouter>
      <div>

        <Navbar />

        <Switch>
          <Route path="/about">
            <WeatherBar town="Reading" countryISO="UK" />
          </Route>
          <Route path="/projects">
            <ProjectsRouter />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

      </div>
    </HashRouter>
  </div>
  );
}

function ProjectsRouter() {

  let { path, url } = useRouteMatch();


  const projectsArr = [
    { name: "Tile Game", linkTo: "/tilegame", component: () => { return <TileGame /> } },
    { name: "Minesweeper (In Progress)", linkTo: "/minesweeper", component: () => { return <Minesweeper /> } },
    { name: "Weather", linkTo: "/weather", component: () => { return <WeatherBar town="Reading" countryISO="UK" /> } }
  ]

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projectsArr.map(projectObj => <CustomLink id={projectObj.name} text={projectObj.name} to={`${url + projectObj.linkTo}`} />)}

      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a project.</h3>
        </Route>
        {projectsArr.map(projectObj => <Route path={`${path + projectObj.linkTo}`} >{projectObj.component}</Route>)}
      </Switch>
    </div>
  );
}

