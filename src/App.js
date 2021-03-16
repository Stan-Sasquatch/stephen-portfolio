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
        <Navbar linksArr={linksArr} nested={false} />
        </div>
        <div className="switch-container">
        <Switch>
          <Route path="/about">
            <div className="no-pic">
            <AboutPage />
            </div>
          </Route>
          <Route path="/projects">
          <div className="no-pic">
            <ProjectsRouter />
            </div>
          </Route>
          <Route path="/">
          <div className="home-page">
            <HomePage />
            </div>
          </Route>
        </Switch>
        </div>
    </HashRouter>
  </div>
  );
}

