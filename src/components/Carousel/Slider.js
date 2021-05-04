import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import memento from '../../images/memento.jpg'
import earlyRider from '../../images/earlyRider.jpg'
import puppyShot from '../../images/puppyShot.jpg'
import './Slider.css'
import { Badge, Button } from 'react-bootstrap';
import github from '../../images/icons/github.png'
import forward from '../../images/icons/forward.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


export default function Slider() {
    const pdData = [
        {
            id: 1,
            title: "Memento",
            image: memento,
            description: "A complete package for Wedding Photography where users can order, manage and track their services. After taking services, customers can share their experiences also. Their reviews are dynamically shown on website homepage.  Admins can add service from admin panel. They can make a person an admin also. After finishing customer's services, admin can change the status of orders, which is shown on individual customers order page.",
            technology: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            live: "https://memento-auth.web.app/",
            link: "https://github.com/MarufHimalay/memento-client"
        },
        {
            id: 2,
            title: "Puppy Shot",
            image: puppyShot,
            description: "Single page web application made with ReactJS where customers and admin have different roles. Customer can select products from homepage. They can see their ordered products in checkout page. After checkout they will be redirected to the order page. Customers can see their ordered products in order page. Admin can add, manage and delete products from admin panel.",
            technology: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase", "Bootstrap5"],
            live: "https://puppy-shot.web.app/",
            link: "https://github.com/MarufHimalay/puppy-shot-client"
        },
        {
            id: 3,
            title: "Early Rider",
            image: earlyRider,
            description: "This is a Ride Sharing platform. Riders can share their ride with another by selecting preferred vehicle, route, destination and fare. A google map is their to show the minimal distance between start and end point. Users have to login/signup to continue.. ",
            technology: ["ReactJS", "Firebase", "Bootstrap5", "Google Map"],
            link: "https://github.com/MarufHimalay/early-riders",
            live: "https://early-rider.web.app/"
        }
    ]

    return (
        <div style={{ backgroundColor: "#2F2F2F" }}>
            <div className="container pt-5 d-flex">
                <h3 className="text-white" id="works" ><span>{"<"}Projects</span>{">"}</h3>
                <Button id="button-outline" as={Link} to="/projects">All projects</Button>
            </div>

            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">
                {
                    pdData.map(pd => <SwiperSlide>
                        <div className="">

                            <div className="">
                                <img style={{ width: '100%' }} src={pd.image} alt="" srcset="" />
                            </div>
                            <div id="pd-description" className="">
                                <div className="p-2 mb-3">
                                    <p style={{ color: "#D0CCA" }}>0{pd.id}</p>
                                    <h3 style={{ color: "#EE6B4D" }}>{pd.title}</h3>
                                    <small className="p-2" >{pd.description}</small>
                                    <br />
                                    <br />
                                    {
                                        pd.technology.map(tech => <p className="m-1" style={{ display: 'inline', fontSize: "20px" }}><Badge style={{ backgroundColor: "#4B5769" }}>{tech}</Badge></p>)
                                    }
                                    <br />
                                    <br />
                                    <a className="icon" href={pd.link} target="_blank"><FontAwesomeIcon className="mx-2" style={{ fontSize: "30px" }} icon={faGithub} /></a>
                                    <a className="icon" href={pd.live} target="_blank"><FontAwesomeIcon className="mx-2" style={{ fontSize: "30px" }} icon={faShareSquare} /></a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>

        </div>
    )
}