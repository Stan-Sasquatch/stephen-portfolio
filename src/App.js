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

  const linksArr = [{ id: "homeLink", text: "Home", link: "/", activeOnlyWhenExact: true },
  { id: "aboutLink", text: "About", link: "/about" },
  { id: "projectsLink", text: "Projects", link: "/projects" }]


  return (<div className="app">
    <HashRouter>
      <div>
        <Navbar linksArr={linksArr} nested={false} />

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
  let myURL = url

  const projectsArr = [
    { id: "Tile Game", text: "Tile Game", link: "/tilegame", component: () => { return <TileGame /> } },
    { id: "Minesweeper", text: "Minesweeper", link: "/minesweeper", component: () => { return <Minesweeper /> } },
    { id: "Weather", text: "Weather", link: "/weather", component: () => { return <WeatherBar town="Reading" countryISO="UK" /> } }
  ]

  return (
    <div>
      <h2>Projects</h2>
      <Navbar linksArr={projectsArr} url={myURL} nested={true} />
      <Switch>
        <Route exact path={path}>
          <h3>Please select a project.</h3>
        </Route>
        {projectsArr.map(projectObj => <Route path={path + projectObj.link} >{projectObj.component}</Route>)}
      </Switch>
    </div>
  );
}

