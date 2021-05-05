import React from 'react';
import './Projects.css'
import memento from '../../images/memento.jpg'
import earlyRider from '../../images/earlyRider.jpg'
import puppyShot from '../../images/puppyShot.jpg'
import Project from '../Project/Project';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Projects = () => {
    const projectData = [
        {
            id:1,
            title:"Memento",
            image:memento,
            description: "A complete package for Wedding Photography where users can order, manage and track their services. After taking services, customers can share their experiences also. Their reviews are dynamically shown on website homepage.  Admins can add service from admin panel. They can make a person an admin also. After finishing customer's services, admin can change the status of orders, which is shown on individual customers order page.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            live:"https://memento-auth.web.app/",
            link:"https://github.com/MarufHimalay/memento-client"
        },
        {
            id:2,
            title:"Puppy Shot",
            image:puppyShot,
            description: "Single page web application made with ReactJS where customers and admin have different roles. Customer can select products from homepage. They can see their ordered products in checkout page. After checkout they will be redirected to the order page. Customers can see their ordered products in order page. Admin can add, manage and delete products from admin panel.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase", "Bootstrap5"],
            live:"https://puppy-shot.web.app/",
            link:"https://github.com/MarufHimalay/puppy-shot-client"
        },
        {
            id:3,
            title:"Early Rider",
            image:earlyRider,
            description: "This is a Ride Sharing platform. Riders can share their ride with another by selecting preferred vehicle, route, destination and fare. A google map is their to show the minimal distance between start and end point. Users have to login/signup to continue.. ",
            technology:["ReactJS", "Firebase", "Bootstrap5", "Google Map"],
            link:"https://github.com/MarufHimalay/early-riders",
            live: "https://early-rider.web.app/"
        }
    ]
    return (
        <div>
        <div className="container pt-5 mb-5">
            <div className="d-flex">
                <h3 className="text-white" id="works" ><span>{"<"}Projects</span>{">"}</h3>
                <Button id="button-outline" as={Link} to="/projects">All projects</Button>
            </div>
            {
                projectData.map(pd => <Project project={pd}></Project>)
            }
                            <h3 className="text-white" ><span>{"<"}Projects</span>{"/>"}</h3>
        </div>
        </div>
    );
};

export default Projects;