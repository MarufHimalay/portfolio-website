import React from 'react';
import { Button, Container } from 'react-bootstrap';
import react from '../../images/react.png'
import Blog from '../Blog/Blog';
const Blogs = () => {
    const blogsData = [
        {
            banner: react,
            title: "10 React Interview Questions",
            description: "React is a library that used to create awesome user interface … hence it is a library it need some other tools to make..",
            technology: ["react"],
            date: "May 5 2021"

        },
        {
            banner: react,
            title: "10 React Interview Questions",
            description: "React is a library that used to create awesome user interface … hence it is a library it need some other tools to make..",
            technology: ["react"],
            date: "May 5 2021"

        },
        {
            banner: react,
            title: "10 React Interview Questions",
            description: "React is a library that used to create awesome user interface … hence it is a library it need some other tools to make..",
            technology: ["react"],
            date: "May 5 2021"

        }
    ]
    return (
        <Container>
            <div className="d-flex m-2">
                <h3 id="works" ><span style={{color: "white"}}>My Articles</span></h3>
                <Button variant="outline-success">All articles</Button>
            </div>
        <div className="row">
            {
                blogsData.map(bd => <Blog blog={bd}></Blog>)
            }
        </div>
        </Container>
    );
};

export default Blogs;