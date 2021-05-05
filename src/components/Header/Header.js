import { faFacebookF, faGithub, faLinkedin, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myPic from '../../images/my-pic.png'
import './Header.css'
const Header = () => {
    return (
        <div style={{backgroundColor:"#222222"}}>
        <Container >
            <div className="row pb-5 pt-3 align-items-center">
                <div className="col-md-6 d-flex justify-content-center">
                    <div>
                        <p style={{ color: "#EE6B4D", fontWeight:"700" }} className="title">HI THERE!</p>
                        <h3 style={{ color: "#E6F1FF", fontWeight: "700" }}><span style={{ color: "#EE6B4D" }}>I'm</span> MOIN UDDIN MARUF</h3>
                        <h4 style={{ color: "#EE6B4D" }}>JavaScript Developer</h4>
                        <br />
                        <p style={{ color: "#E6F1FF", backgroundColor:"#2F2F2F", padding:"10px", borderRadius:"10px" }}>Very much passionate about implementing and launching new projects using various technology. Ability to translate business requirements into technical solutions. Looking for an entry-level position as a software engineer in a reputed firm.</p>
                        <Button id="button-hover"  className="btn mx-2"><span style={{ color: "white" }}> <a style={{textDecoration:"none", color:"white"}} href="https://docs.google.com/document/d/1y31F5Lovs5gStzoOc6d8H6baNsG8uU-uDG0hfvjUFV4/edit">Resume</a> </span></Button>
                        <Button id="button-outline" as={Link} to="/projects" >My Projects</Button>{' '}
                        <div className="mt-4 d-flex justify-content-center">
                            <a style={{ borderRight:"3px solid #F37B62"}} href="https://github.com/MarufHimalay" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faGithub} /></a>
                            <a style={{ borderRight:"3px solid #F37B62"}} href="https://www.linkedin.com/in/moinuddinmaruf/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faLinkedin} /></a>
                            <a style={{ borderRight:"3px solid #F37B62"}} href="https://www.facebook.com/maruf.moeen/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faFacebookF} /></a>
                            <a href="https://m-u-maruf1999.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faMediumM} /></a>
                        </div>

                    </div>

                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img style={{ width: "100%" }} src={myPic} alt="" srcset="" />
                </div>

            </div>

        </Container>
        </div>
    );
};

export default Header;