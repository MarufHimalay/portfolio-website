import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'
import house from '../../images/icons/house.png'
import user from '../../images/icons/user.png'
import briefing from '../../images/icons/briefing.png'
import blog from '../../images/icons/blogging.png'
import contact from '../../images/icons/contact.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div style={{backgroundColor:"#222222"}}>
    <nav  className="container sticky-top navbar navbar-expand-lg navbar-light">
      <div  className="container-fluid ">
        <div>
          <Link className="navbar-brand " to="/">
            <h3 style={{color:"white", display:"inline"}}><span>{"<"}</span><span >Maruf</span>{">"}</h3>
            </Link>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href="https://github.com/MarufHimalay" target="_blank"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faGithub} /></a>
            </li>
            <li className="nav-item">
            <a href="https://www.linkedin.com/in/moinuddinmaruf/" target="_blank"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faLinkedin} /></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">  Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/about"> About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <a  href="https://docs.google.com/document/d/1y31F5Lovs5gStzoOc6d8H6baNsG8uU-uDG0hfvjUFV4/edit?usp=sharing" className="nav-link active  text-white" target="_blank"><Button id="button-outline"> Resume</Button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;