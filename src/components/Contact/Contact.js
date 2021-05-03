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
        <div className="container text-center mb-5">
            <p style={{ color: "#61F9D5" }}>what's Next?</p>
            <h2 style={{ color: "white" }}>Get In Touch</h2>
            <p style={{ color: "white" }}>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. <br /> I'll try my best to get back to you!</p>
            <div className="d-flex justify-content-center">
                <div id="form" style={{backgroundColor:"#172A45", borderRadius:"10px"}} className="p-4">
                    <form onSubmit={sendEmail}>
                        <label>Name</label>
                        <input className="form-control" name="name" placeholder="name" />
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" placeholder="email" />
                        <label>Message</label>
                        <textarea className="form-control" name="message" placeholder="message" />
                        <br />
                        <input className="btn btn-success w-100 " type="submit" value="Send" />
                    </form>
                    <p className="text-white mt-2">Sending to <a style={{color:"cyan"}} href="mailto:m.u.maruf1999@gmail.com">m.u.maruf1999@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;