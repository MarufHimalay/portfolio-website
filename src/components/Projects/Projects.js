import React from 'react';
import './Projects.css'
import memento from '../../images/memento.jpg'
import Project from '../Project/Project';
import { Button } from 'react-bootstrap';
const Projects = () => {
    const projectData = [
        {
            id:1,
            title:"Memento",
            image:memento,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            link:"https://memento-auth.web.app/"
        },
        {
            id:2,
            title:"Memento",
            image:memento,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            link:"https://memento-auth.web.app/"
        },
        {
            id:3,
            title:"Memento",
            image:memento,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            link:"https://memento-auth.web.app/"
        }
    ]
    return (
        <div  className="container">
            <div className="d-flex">
                <h3 id="works" ><span style={{color: "white"}}>Some of my Projects</span></h3>
                <Button variant="outline-success">All projects</Button>
            </div>
            {
                projectData.map(pd => <Project project={pd}></Project>)
            }
        </div>
    );
};

export default Projects;