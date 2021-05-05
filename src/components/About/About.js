import React from 'react';
import { Badge, Container } from 'react-bootstrap';
import myPic from '../../images/my-pic-about.png'
const About = () => {
    return (
        <div cl style={{backgroundColor:"#222222"}}>
            <div  className="container pt-3 pb-3">
                <h3 ><span style={{ color: "white" }}>{"<"}About{">"}</span></h3>
                <div className="row mt-5">
                    <div className=" col-md-6">
                        <div className="">
                            <img style={{ width: "90%" }} src={myPic} alt="" srcset="" />
                            <h3 className="text-white"><span style={{ color: "#EE6B4D" }}>I'm</span> Moin Uddin Maruf</h3>
                            <p className="text-white">Very much passionate about implementing and launching new projects using various technology. <br /> Ability to translate business requirements into technical solutions. <br /> Looking for an entry-level position as a software engineer in a reputed firm.</p>
                            <br />
                        </div>
                    </div>
                    <div  className="col-md-6 d-flex justify-content-center">
                        <div className="w-75">
                            <div className="mt-5 mb-5">
                                <h3 className="text-white">My skills</h3>
                                <svg height="30" width="70">
                                    <line x1="0" y1="0" x2="70" y2="0" style={{ stroke: "#EE6B4D", strokeWidth: "4" }} />
                                </svg>
                                <br />
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
                            <svg height="30" width="70">
                                <line x1="0" y1="0" x2="70" y2="0" style={{ stroke: "#EE6B4D", strokeWidth: "4" }} />
                            </svg>
                            <br />
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>ReactJS</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>NodeJS</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>ExpressJS</Badge></h4>
                            <h4 className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", marginBottom: "5px" }}>Redux</Badge></h4>
                        </div>

                    </div>
                </div>
                <h3 className="mb-0" ><span style={{ color: "white" }}>{"<"}About{"/>"}</span></h3>
            </div>
            </div>
    );
};

export default About;
