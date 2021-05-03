import React from 'react';
import { Button, Container } from 'react-bootstrap';
import react from '../../images/react.png'
import javascript from '../../images/javascript.jpg'
import machineLearning from '../../images/machinelearning.jpg'
import Blog from '../Blog/Blog';
import { Link } from 'react-router-dom';
const Blogs = () => {
    const blogsData = [
        {
            banner: react,
            title: "Top 10 React Interview Questions",
            description: "React is a library that used to create awesome user interface … hence it is a library it need some other tools to make..",
            technology: ["react"],
            date: "May 5 2021",
            link:"https://m-u-maruf1999.medium.com/top-10-react-interview-questions-fe530145359e"

        },
        {
            banner: javascript,
            title: "10 JavaScript Interview Questions",
            description: "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity...",
            technology: ["react"],
            date: "May 5 2021",
            link:"https://m-u-maruf1999.medium.com/10-javascript-interview-questions-df810841ed23"

        },
        {
            banner: machineLearning,
            title: "5 Easy Steps to Learn Machine Learning",
            description: "React is a library that used to create awesome user interface … hence it is a library it need some other tools to make..",
            technology: ["react"],
            date: "May 5 2021",
            link:"https://m-u-maruf1999.medium.com/5-easy-steps-to-learn-machine-learning-118f4cea81d1"

        }
    ]
    return (
        <Container className="mb-5">
            <div className="d-flex mt-5 mb-5">
                <h3 id="works" ><span style={{color: "white"}}>{"<"}Articles{">"}</span></h3>
                <Button as={Link} to="/blogs" variant="outline-success">All articles</Button>
            </div>
        <div className="row">
            {
                blogsData.map(bd => <Blog blog={bd}></Blog>)
            }
        </div>
        <h3 ><span style={{color: "white"}}>{"<"}Articles{"/>"}</span></h3>

        </Container>
    );
};

export default Blogs;