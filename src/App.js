import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Career from "./pages/Career";
import Project from "./pages/Project"
import ProjectPageDetail from "./pages/ProjectPageDetail"
import Error from "./pages/Error"
import Navbar from "./pages/NavBar/NavBar"
import Footer from "./pages/Footer"

function App() {
  return (
    <Router>
       <Navbar/>
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/project/:projectid" component={ProjectPageDetail} />
        <Route path="*" component={Error}/>
      </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
