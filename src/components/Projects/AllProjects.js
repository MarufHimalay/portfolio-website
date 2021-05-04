import React from 'react';
import '../Projects/Projects.css'
import memento from '../../images/memento.jpg'
import puppyShot from '../../images/puppyShot.jpg'
import earlyRider from '../../images/earlyRider.jpg'
import footballTracker from '../../images/footballTracker.jpg'
import fancySlider from '../../images/fancySlider.jpg'
import Hungry from '../../images/hungryMonster.jpg'
import Project from '../Project/Project';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AllProjects = () => {
    const projectData = [
        {
            id:1,
            title:"Memento",
            image:memento,
            description: "A complete package for Wedding Photography where users can order, manage and track their services. After taking services, customers can share their experiences also. Their reviews are dynamically shown on website homepage.  Admins can add service from admin panel. They can make a person an admin also. After finishing customer's services, admin can change the status of orders, which is shown on individual customers order page.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "StripeJS", "Firebase", "Bootstrap5"],
            live:"https://memento-auth.web.app/",
            link:"https://github.com/MarufHimalay/memento-client"
        },
        {
            id:2,
            title:"Puppy Shot",
            image:puppyShot,
            description: "Single page web application made with ReactJS where customers and admin have different roles. Customer can select products from homepage. They can see their ordered products in checkout page. After checkout they will be redirected to the order page. Customers can see their ordered products in order page. Admin can add, manage and delete products from admin panel.",
            technology:["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase", "Bootstrap5"],
            live:"https://puppy-shot.web.app/",
            link:"https://github.com/MarufHimalay/puppy-shot-client"
        },
        {
            id:3,
            title:"Early Rider",
            image:earlyRider,
            description: "This is a Ride Sharing platform. Riders can share their ride with another by selecting preferred vehicle, route, destination and fare. A google map is their to show the minimal distance between start and end point. Users have to login/signup to continue.. ",
            technology:["ReactJS", "Firebase", "Bootstrap5", "Google Map"],
            link:"https://github.com/MarufHimalay/early-riders",
            live: "https://early-rider.web.app/"
        },
        
        {
            id:4,
            title:"Football Tracker",
            image:footballTracker,
            description: "This is a single page web app to show football team. You can see detail info of the teams by clicking on any particular team. I used thesportsdb api to load and search team info.",
            technology:["ReactJS", "Bootstrap5", "CSS3", "HTML"],
            link:"https://github.com/MarufHimalay/football-tracker",
            live: "https://team-tracker-react.netlify.app/"
        },
        {
            id:5,
            title:"Fancy Slider",
            image:fancySlider,
            description: "You can select images for making a slider. You can deselect a image by clicking again. Slider duration can be changed also. ",
            technology:["JavaScript", "HTML5", "CSS3"],
            link:"https://github.com/MarufHimalay/slider",
            live: "https://marufhimalay.github.io/slider/index.html"
        },
        {
            id:5,
            title:"Hungry Monster",
            image:Hungry,
            description: "This website is for a restaurant for showing their menus to customers. Customers can search menus by ingredients, names etc. After clicking on a particular food item, detail info of that item will be shown on the top. ",
            technology:["JavaScript", "HTML5", "CSS3"],
            link:"https://github.com/MarufHimalay/hungry-monster",
            live: "https://marufhimalay.github.io/hungry-monster/"
        }
    ]
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex">
                <h3 className="text-white" id="works" ><span>{"<"}Projects</span>{">"}</h3>
                <Button as={Link} to="/projects" variant="outline-success">All projects</Button>
            </div>
            {
                projectData.map(pd => <Project project={pd}></Project>)
            }
                            <h3 className="text-white" ><span>{"<"}Projects</span>{"/>"}</h3>
        </div>
    );
};

export default AllProjects;