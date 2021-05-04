import React from 'react';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Slider from '../Carousel/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider />
            <Blogs></Blogs>
            
            <Contact />
            
        </div>
    );
};

export default Home;