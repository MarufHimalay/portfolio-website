import React from 'react';
import './Projects.css'
import memento from '../../images/memento.jpg'
import Project from '../Project/Project';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Projects = () => {
    const projectData = [
        {
            id:1,
            title:"Memento",
            image:memento,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            live:"https://memento-auth.web.app/",
            link:"https://github.com/MarufHimalay/memento-client"
        },
        {
            id:2,
            title:"Puppy Shot",
            image:memento,
            description: "Single page web application made with ReactJS where customers can add product to the cart, after checkout they will be redirected to the order page. Admins can add products to the homepage, can manage products.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            live:"https://puppy-shot.web.app/",
            link:"https://github.com/MarufHimalay/puppy-shot-client"
        },
        {
            id:3,
            title:"Memento",
            image:memento,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            link:"https://github.com/MarufHimalay/early-riders",
            live: "https://early-rider.web.app/"
        }
    ]
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex">
                <h3 className="text-white" id="works" ><span>{"<"}Projects</span>{">"}</h3>
                <Button as={Link} to="/projects" variant="outline-success">All projects</Button>
            </div>
            {
                projectData.map(pd => <Project project={pd}></Project>)
            }
                            <h3 className="text-white" ><span>{"<"}Projects</span>{"/>"}</h3>
        </div>
    );
};

export default Projects;