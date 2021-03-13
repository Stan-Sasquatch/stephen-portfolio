import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  useRouteMatch

} from "react-router-dom";
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ProjectsRouter from './Components/ProjectsRouter';
import Navbar from './Components/NavBar';
import './CSS/App.css';

export default function App() {

  const linksArr = [{ id: "homeLink", text: "Home", link: "/", activeOnlyWhenExact: true },
  { id: "aboutLink", text: "About", link: "/about" },
  { id: "projectsLink", text: "Projects", link: "/projects" }]


  return (<div className="app-container">
    <HashRouter>
      <div className="nav-container-1">
      <div className="nav-container-2">
        <Navbar className="sticky" linksArr={linksArr} nested={false} />
        </div>

        </div>

        <div className="switch-container">
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

