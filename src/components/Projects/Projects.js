import React from 'react';
import './Projects.css'
import memento from '../../images/memento.jpg'
import Project from '../Project/Project';
const Projects = () => {
    const projectData = [
        {
            id:1,
            title:"Memento",
            image:memento,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto."
        },
        {
            id:2,
            title:"Memento",
            image:memento,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto."
        },
        {
            id:3,
            title:"Memento",
            image:memento,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iusto."
        }
    ]
    return (
        <div  className="container">
            <h2 className="text-center"><span>Projects Overview</span></h2>
            <div className="d-flex">
                <h3 id="works" >Some of my Projects</h3>
                <button className="btn btn-success">all works</button>
            </div>
            {
                projectData.map(pd => <Project project={pd}></Project>)
            }
        </div>
    );
};

export default Projects;