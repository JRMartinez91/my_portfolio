import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom'
import './App.css';
import Homepage from './Components/Homepage'
import Projects from './Components/Projects'
import MyLinks from './Components/MyLinks'
import Contact from './Components/Contact'
import Resume from './Components/Resume'

class App extends Component {
  render(){
    return (
      <Router>
        <div className="wrapper">
        <header>
        <h1><p>J</p><p>a</p><p>m</p><p>e</p><p>s</p><p> </p><p>M</p><p>a</p><p>r</p><p>t</p><p>i</p><p>n</p><p>e</p><p>z</p></h1>
        <h2>Fullstack Web Developer</h2>
        {/* <img alt="Banner"/> */}
        </header>
        <div className="nav-main-box"></div>
        <nav>
        <Link to="/home">
          Home
        </Link>
        <Link to="/projects">
          Projects
        </Link>
        <Link to="/contact">
          Bio/Contact
        </Link>
        <Link to="/resume">
          Resume
        </Link>
        <Link to="/links">
          Links
        </Link>
        </nav>
        <main>
          <Switch>
            <Route path="/resume" component={Resume}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/links" component={MyLinks}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/home" component={Homepage}/>
            <Route path="/">
              <Redirect to="/home"/>
            </Route>
          </Switch>
        </main>
      </div>
        <footer>
          <p>&copy; James Martinez, 2020</p>
        </footer>
      </Router>
    );
  }
}

export default App;
