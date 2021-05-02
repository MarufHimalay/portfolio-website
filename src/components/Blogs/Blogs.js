import React from 'react';
import { Container } from 'react-bootstrap';
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
        <div className="row">
            {
                blogsData.map(bd => <Blog blog={bd}></Blog>)
            }
        </div>
        </Container>
    );
};

export default Blogs;