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
        <div style={{}} className="row my-3 p-2">
            <div  className="col-md-6">
                <img style={{width: '100%'}} src={project.image} alt="" srcset=""/>
            </div>
            <div   style={{borderRadius: '5px'}} className="col-md-6">
                <div className=" my-2">
                <p className="text-white" >0{project.id}</p>
                <h3 style={{color:"#EE6B4D"}}>{project.title}</h3>
                <p style={{color:"#E6F1FF"}}>{project.description}</p>
                {
                    technology.map(tech => <h5 className="m-1" style={{display: 'inline'}}><Badge style={{backgroundColor:"#4B5769", marginBottom:"5px"}}>{tech}</Badge></h5>)
                }
                <br/>
                <br/>
                <a className="icon" href={project.link} target="_blank"><FontAwesomeIcon className="mx-2" style={{ fontSize:"30px"}} icon={faGithub} /></a>
                <a className="icon" href={project.live} target="_blank"><FontAwesomeIcon className="mx-2" style={{ fontSize:"30px"}}  icon={faShareSquare} /></a>
                </div>

            </div>
        </div>
    );
};

export default Project;