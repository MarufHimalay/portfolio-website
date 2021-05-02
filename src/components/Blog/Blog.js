import React from 'react';

const Blog = ({blog}) => {
    return (
        <div  className="col-md-4">
            <div style={{border:"1px dashed red"}}>
            <img style={{width:"100%"}} src={blog.banner} alt="" srcset=""/>
            <p>{blog.description}</p>
            <div>
                <div>
                    {
                        blog.technology.map(btn => <li>{btn}</li>)
                    }
                </div>
                <p>{blog.date}</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;