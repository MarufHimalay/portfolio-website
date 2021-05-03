import React from 'react';
import { init } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
init("user_MU9AWoBbDuXGEuBq3jJEA");
const Footer = () => {
    return (
        <>
            <div className="container text-center">
                <p className="text-white">Designed & Built by <a href="https://github.com/MarufHimalay">Moin Uddin Maruf</a></p>
            </div>
            <div className="mt-4 d-flex justify-content-center">
                <a href="https://github.com/MarufHimalay" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/moinuddinmaruf/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/maruf.moeen/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faFacebookF} /></a>
                <a href="https://m-u-maruf1999.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" style={{ color: "white", fontSize: "30px" }} icon={faMediumM} /></a>
            </div>
        </>
    );
};

export default Footer;