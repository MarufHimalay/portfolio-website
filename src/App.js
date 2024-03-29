import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllBlogs from './components/Blogs/AllBlogs';
import AllProjects from './components/Projects/AllProjects';

function App() {
  return (
    <div>
     <Router>
       <NavBar></NavBar>
       <Switch>
       <Route exact path="/">
            <Home />
          </Route>
          <Route path ="/about">
            <About />
          </Route>
          <Route path="/projects">
            <AllProjects />
          </Route>
          <Route path="/blogs">
            <AllBlogs />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
       </Switch>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
