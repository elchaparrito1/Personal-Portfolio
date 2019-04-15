import React from "react"
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import history from "../src/history";

import './App.css';

const App = () => {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
