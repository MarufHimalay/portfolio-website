import React from 'react';

const Project = ({project}) => {
    return (
        <div   className="row my-3">
            <div  className="col-md-6">
                <img style={{width: '100%'}} src={project.image} alt="" srcset=""/>
            </div>
            <div id="project-description" style={{border: '1px solid red', backgroundColor:"red"}} className="col-md-6 my-2">
                <p>{project.id}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button>github</button>
                <button>live</button>
            </div>
        </div>
    );
};

export default Project;