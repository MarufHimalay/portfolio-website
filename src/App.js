import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <About />
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
