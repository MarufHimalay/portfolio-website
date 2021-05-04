import { faFacebookF, faGithub, faLinkedin, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myPic from '../../images/my-pic.png'
const Header = () => {
    return (
        <Container>
            <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center">
                    <div>
                        <p style={{ color: "#64FFDA" }} className="title">HI THERE!</p>
                        <h3 style={{ color: "#E6F1FF", fontWeight: "700" }}>I'M MOIN UDDIN MARUF</h3>
                        <p style={{ color: "#64FFDA" }}>JavaScript Developer</p>
                        <br />
                        <p style={{ color: "#E6F1FF" }}>Very much passionate about implementing and launching new projects using various technology. Ability to translate business requirements into technical solutions. Looking for an entry-level position as a software engineer in a reputed firm.</p>
                        <Button className="btn btn-success mx-2"><span style={{ color: "white" }}> <a style={{textDecoration:"none", color:"white"}} href="https://docs.google.com/document/d/1y31F5Lovs5gStzoOc6d8H6baNsG8uU-uDG0hfvjUFV4/edit">Resume</a> </span></Button>
                        <Button as={Link} to="/projects" variant="outline-success">My Projects</Button>{' '}
                        <div className="mt-4 d-flex justify-content-center">
                            <a href="https://github.com/MarufHimalay" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/moinuddinmaruf/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faLinkedin} /></a>
                            <a href="https://www.facebook.com/maruf.moeen/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faFacebookF} /></a>
                            <a href="https://m-u-maruf1999.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faMediumM} /></a>
                        </div>

                    </div>

                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img style={{ width: "100%" }} src={myPic} alt="" srcset="" />
                </div>

            </div>

        </Container>
    );
};

export default Header;