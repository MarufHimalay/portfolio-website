import React from 'react';
import { Button, Container } from 'react-bootstrap';
import react from '../../images/react.png'
import javascript from '../../images/javascript.jpg'
import machineLearning from '../../images/machinelearning.jpg'
import blockchain from '../../images/blockchain.jpg'
import cryptocurrency from '../../images/cryptocurrency.jpeg'
import Blog from '../Blog/Blog';
const AllBlogs = () => {
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

        },
        {
            banner: cryptocurrency,
            title: "100x Your Money With This Cryptocurrency",
            description: "Cryptocurrency is a form of payment that can be exchanged online for goods and services. Many companies have issued their own currencies, often called tokens...",
            technology: ["cryptocurrency", "blockchain", "etherium", "bitcoin" ],
            date: "April 5 2021",
            link:"https://m-u-maruf1999.medium.com/100x-your-money-with-this-cryptocurrency-67b215b3aff0"

        },
        {
            banner: blockchain,
            title: "Blockchain Technology",
            description: "A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Each block in the chain contains a number...",
            technology: ["Blockchain", "DLT", "bitcoin" ],
            date: "April 10 2021",
            link:"https://m-u-maruf1999.medium.com/blockchain-technology-a77fbc431b48"

        }
    ]
    return (
        <Container className=" mb-5">
            <div className="d-flex mt-5">
                <h3 id="works" ><span style={{color: "white"}}>{"<"}Articles{">"}</span></h3>
                <Button variant="outline-success">All articles</Button>
            </div>
        <div className="row    mt-5">
            {
                blogsData.map(bd => <Blog blog={bd}></Blog>)
            }
        </div>
        <h3 ><span style={{color: "white"}}>{"<"}Articles{"/>"}</span></h3>

        </Container>
    );
};

export default AllBlogs;