import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import Project from './Components/Project';
import Navbar from './Components/NavBar';
import './CSS/App.css';
import CustomLink from './Components/CustomLink'
import TileGame from './Projects/TileGameProject/TileGame'
import HookTest from './Components/HookTest'
import PenguinPage from './Projects/Penguin/PenguinPage'



export default function App() {


  return (<div className="app">
    <HashRouter>
      <div>

        <Navbar />

        <Switch>
          <Route path="/about">
            <AboutPage />
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
    { name: "React Hook Test: useState", linkTo: "/hooktest", component: () => { return <HookTest /> } },
    { name: "Penguin", linkTo: "/penguin", component: () => { return <PenguinPage /> } },
    { name: "Project Test", linkTo: "/test", component: () => { return <Project projectName={"Project Test"} /> } }]

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

