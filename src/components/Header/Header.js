import React from 'react';
import { Button, Container } from 'react-bootstrap';
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
                        <p style={{ color: "#E6F1FF" }}>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                        <button className="btn btn-success mx-2"><span style={{ color: "white" }}>Resume</span></button>
                        <Button variant="outline-success">My Projects</Button>{' '}
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