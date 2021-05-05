import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Slider from '../Carousel/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About />
            <Slider />
            <Blogs></Blogs>
            <Contact />
        </div>
    );
};

export default Home;