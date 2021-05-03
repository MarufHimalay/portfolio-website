import React from 'react';
import { Badge } from 'react-bootstrap';

const Blog = ({ blog }) => {
    return (
        <div className="col-md-4">
            <div className="m-2" style={{backgroundColor: '#172A45'}} >
            <div>
                <img style={{ width: "100%" }} src={blog.banner} alt="" srcset="" />
                <div className="mx-3 my-3">
                    <h5 style={{ color: "white" }}>{blog.title}</h5>
                    <small style={{ color: "white" }}>{blog.description}</small>
                </div>
                <div className="d-flex justify-content-between m-3">
                    <div>
                        {
                            blog.technology.map(btn => <p className="m-1" style={{ display: 'inline' }}><Badge style={{ backgroundColor: "#4B5769", fontSize: "15px" }}>{btn}</Badge></p>)
                        }
                    </div>
                    <p style={{ color: "white" }}>{blog.date}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;