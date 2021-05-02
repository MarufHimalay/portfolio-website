import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div style={{border: '1px solid red'}} className="col-md-6 d-flex justify-content-center">
                <div style={{border: '1px solid red'}}>
                <p>Hello, I'm</p>
                <h3>Moin Uddin Maruf</h3>
                <p>Web Developer  Programmer</p>
                <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. <br/> To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                <br/>
                <button className="btn btn-success">About Me</button> <button className="btn btn-success">Get In Touch</button> 
                </div>
            </div>
            <div className="text-center">
                <h1 >My Skills</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h4><span style={{borderBottom:"2px solid red"}}>Comfortable</span></h4>
                        <button className="btn">ReactJS</button>
                        <button className="btn">JavaScript</button>
                        <button className="btn">NodeJS</button>
                        <button className="btn">ExpressJS</button>
                        <button className="btn">Bootstrap</button>
                        <button className="btn">HTML</button>
                        <button className="btn">CSS</button>
                        <button className="btn">REST API</button>
                    </div>
                    <div className="col-md-4">
                        <h4><span style={{borderBottom:"2px solid red"}}>Familiar</span></h4>
                        <button className="btn">Material UI</button>
                        <button className="btn">JSON</button>
                        <button className="btn">SASS</button>
                        <button className="btn">OOP</button>
                    </div>
                    <div className="col-md-4">
                        <h4><span style={{borderBottom:"2px solid red"}}>Tools:</span></h4>
                        <button className="btn">VS CODE</button>
                        <button className="btn">Chrome Dev Tool</button>
                        <button className="btn">Firebase</button>
                        <button className="btn">Netlify</button>
                        <button className="btn">Heroku</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;