import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container text-center mt-5 mb-5">
            <p style={{ color: "#61F9D5"}}>what's Next?</p>
            <h2 style={{ color: "white"}}>Get In Touch</h2>
            <p style={{ color: "white"}}>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. <br /> I'll try my best to get back to you!</p>
            {/* <Button className="p-2" style={{ fontSize:"20px"}}variant="outline-success">Say Hello</Button> */}
            <div className="col-md-6">
               <div className="mx-4">
               <input className="form-control m-3" type="text" placeholder="Name"/>
                <input className="form-control m-3" type="text" placeholder="Email"/>
                <input style={{height:"130px"}} className="form-control m-3" type="text" placeholder="Message"/>
                <div className="d-flex justify-content-end">
                <input className="btn btn-success" type="submit" value="Submit"/>
                </div>
            </div>
            <div className="col-md-6">
                
            </div>
               </div>
        </div>
    );
};

export default Contact;