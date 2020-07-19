import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Project from './Project';
import Navbar from './NavBar';
import './App.css';
import CustomLink from './CustomLink'
import TileGame from './TileGame'




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
  const createProject = (name) => { return <Project projectName={name} /> }

  const projectsArr = [
    { name: "Tile Game", linkTo: "/tilegame", component: () => { return <TileGame /> } },
    { name: "Project Two", linkTo: "/two", component: () => { return <Project projectName={"Project Two"} /> } },
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

