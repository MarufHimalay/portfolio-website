import React from 'react';
import { Container } from 'react-bootstrap';
import myPic from '../../images/my-pic.png'
const Header = () => {
    return (
        <Container>
        <div className="row align-items-center vh-100 ">
            <div className="col-md-6 d-flex justify-content-center">
                <div>
                <h4 style={{color:"#C5C6C7"}}>Welcome to my website</h4>
                <h1 style={{color:"#66FCF1"}} className="title">Hi There!</h1>
                <h1 style={{fontSize:"45px",color:"#66FCF1", fontWeight:"700"}}>I'M MOIN UDDIN MARUF</h1>
                <h2 style={{color:"#FC4445", fontWeight:"700"}}>JavaScript Developer</h2>
                <br/>
                <button style={{backgroundColor:"#FC4445"}} className="btn"><span style={{color:"white"}}>About Me</span></button> <button className="btn btn-outline-light"><span >Get In Touch</span> </button> 
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img style={{width:"100%"}} src={myPic} alt="" srcset=""/>
            </div>
        </div>
        </Container>
    );
};

export default Header;