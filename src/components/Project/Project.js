import React from 'react';
import { Badge } from 'react-bootstrap';
import github from '../../images/icons/github.png'
import forward from '../../images/icons/forward.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
const Project = ({project}) => {
    const technology = project.technology;
    return (
        <div className="row my-3 p-2">
            <div  className="col-md-6">
                <img style={{width: '100%'}} src={project.image} alt="" srcset=""/>
            </div>
            <div  id="project-description" style={{borderRadius: '5px', backgroundColor:"#172A45"}} className="my-2 col-md-6">
                <div className=" my-2">
                <p style={{color:"cyan"}}>0{project.id}</p>
                <h3 style={{color:"#E6F1FF"}}>{project.title}</h3>
                <p style={{color:"#E6F1FF"}}>{project.description}</p>
                {
                    technology.map(tech => <p className="m-1" style={{display: 'inline'}}><Badge style={{backgroundColor:"#4B5769"}}>{tech}</Badge></p>)
                }
                <br/>
                <br/>
                <a href={project.link} target="_blank"><FontAwesomeIcon className="mx-2" style={{color:"white", fontSize:"30px"}} icon={faGithub} /></a>
                <a href={project.live} target="_blank"><FontAwesomeIcon className="mx-2" style={{color:"white", fontSize:"30px"}}  icon={faShareSquare} /></a>
                </div>

            </div>
        </div>
    );
};

export default Project;