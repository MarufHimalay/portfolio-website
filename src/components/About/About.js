import React from 'react';
import { Badge, Container, ProgressBar } from 'react-bootstrap';
import JavaScript from '../../images/icons/JavaScript.png'
import react from '../../images/icons/react.png'
import node from '../../images/icons/node.png'
import mongodb from '../../images/icons/mongodb.png'
import redux from '../../images/icons/redux.png'
import express from '../../images/icons/express.png'
import rest from '../../images/icons/rest.svg'

const About = () => {
    return (
        <Container>
            <div className=" row">
                <div style={{ border: '1px solid red' }} className=" col-md-6 d-flex justify-content-center">
                    <div className="text-center" style={{ border: '1px solid red' }}>
                        <h3>Moin Uddin Maruf</h3>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. <br /> To work in the Software industry with modern web technologies of different local & multinational <br /> Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                        <br />
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="w-75">
                        <h3>My skills</h3>
                     <button style={{backgroundColor:"#05386B", color:"gray"}}>React</button>
                    </div>
                    
                </div>


            </div>
        </Container>
    );
};

export default About;