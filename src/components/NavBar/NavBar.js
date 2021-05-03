import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'
import house from '../../images/icons/house.png'
import user from '../../images/icons/user.png'
import briefing from '../../images/icons/briefing.png'
import blog from '../../images/icons/blogging.png'
import contact from '../../images/icons/contact.png'
const NavBar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand text-white" href="#">Maruf</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active  text-white" aria-current="page" href="#"> <img style={{width:"17px"}} src={house} alt="" srcset=""/> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  text-white" aria-current="page" href="#"><img style={{width:"17px"}} src={user} alt="" srcset=""/> About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  text-white" href="#"><img style={{width:"17px"}} src={briefing} alt="" srcset=""/>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  text-white" href="#"><img style={{width:"17px"}} src={blog} alt="" srcset=""/>Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  text-white" href="#"><img style={{width:"17px"}} src={contact} alt="" srcset=""/>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  text-white" href="#"><img style={{width:"17px"}} src={contact} alt="" srcset=""/><Button variant="outline-success"> Resume</Button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;