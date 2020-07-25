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




export default function App() {


  return (
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
  );
}

function ProjectsRouter() {

  let { path, url } = useRouteMatch();


  const projectsArr = [
    { name: "Tile Game", linkTo: "/tilegame", component: () => { return <TileGame /> } },
    { name: "React Hook Test: useState", linkTo: "/hooktest", component: () => { return <HookTest /> } },
    { name: "Project Three", linkTo: "/three", component: () => { return <Project projectName={"Project Three"} /> } },
    { name: "Project Test", linkTo: "/test", component: () => { return <Project projectName={"Project test"} /> } }]

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

