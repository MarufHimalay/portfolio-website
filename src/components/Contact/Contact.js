import React from 'react';
import { Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css'
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f6h01ro', 'template_jtn2cw8', e.target, 'user_MU9AWoBbDuXGEuBq3jJEA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div style={{backgroundColor:"#1F1F1F"}} className=" pb-5">
            <div className="text-center pt-3">
            <h5 style={{ color: "#F37B62" }}>what's Next?</h5>
            <h2 style={{ color: "white" }}>Get In Touch</h2>
            <p style={{ color: "white" }}>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. <br /> I'll try my best to get back to you!</p>
            </div>
            <div className="d-flex justify-content-center">
                <div id="form" style={{backgroundColor:"#2F2F2F", borderRadius:"10px"}} className="p-4">
                    <form onSubmit={sendEmail}>
                        <label style={{ color: "white", paddingTop:"10px" }}>Name</label>
                        <input className="form-control" name="name" placeholder="name" />
                        <label style={{ color: "white", paddingTop:"10px" }}>Email</label>
                        <input className="form-control" type="email" name="email" placeholder="email" />
                        <label style={{ color: "white", paddingTop:"10px" }}>Message</label>
                        <textarea className="form-control" name="message" placeholder="message" />
                        <br />
                        <input id="button-hover" className="btn text-white w-100 " type="submit" value="Send" />
                    </form>
                    <p className="text-white mt-2">Sending to <a style={{color:"#F37B62"}} href="mailto:m.u.maruf1999@gmail.com">m.u.maruf1999@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;