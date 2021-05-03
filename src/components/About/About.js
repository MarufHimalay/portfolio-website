import React from 'react';
import { Badge, Container } from 'react-bootstrap';
import myPic from '../../images/my-pic.png'
const About = () => {
    return (
        <Container>
            <h3 ><span style={{ color: "white" }}>{"<"}About{">"}</span></h3>
            <div className="row mt-5">
                <div className=" col-md-6">
                    <div className="ms-5">
                        <img style={{ width: "300px" }} src={myPic} alt="" srcset="" />
                        <h3 className="text-white"><span style={{ color: "cyan" }}>I'm</span> Moin Uddin Maruf</h3>
                        <small className="text-white">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. <br /> To work in the Software industry with modern web technologies of different local & multinational <br /> Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</small>
                        <br />
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="w-75">
                        <div className="mt-5 mb-5">
                            <h3 className="text-white">My skills</h3>
                            <svg height="30" width="500">
                                <line x1="0" y1="0" x2="70" y2="0" style={{ stroke: "cyan", strokeWidth: "4" }} />
                            </svg>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>ReactJS</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>NodeJS</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>ExpressJS</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>MongoDB</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>ReduxJS</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>Firebase</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>Rest API</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>VS Code</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>Python</Badge></h4>
                        </div>

                        <h3 className="text-white">I prefer to work with</h3>
                        <svg height="30" width="500">
                            <line x1="0" y1="0" x2="70" y2="0" style={{ stroke: "cyan", strokeWidth: "4" }} />
                        </svg>
                        <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>ReactJS</Badge></h4>
                        <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>NodeJS</Badge></h4>
                        <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>ExpressJS</Badge></h4>
                        <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>Redux</Badge></h4>
                    </div>

                </div>


            </div>
            <h3 ><span style={{ color: "white" }}>{"<"}About{"/>"}</span></h3>
        </Container>
    );
};

export default About;