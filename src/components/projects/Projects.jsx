import React from 'react';
import './projects.css';

const Projects = () => {
    return (
        <div>
            <h1 className="Title"> Projects</h1>
            <div className="projects">
                <div className="card first">
                    <div className="demo"></div>
                    <div className="description">
                        <h1>Restaurant Brochure</h1>
                        <p>
                            This is a restaurant brochure website created in react js and css.
                            I used basic css grid and flex box to place the items on the page
                            and tried styling the background image in the header to have a 
                            parallax scrollling effect but it is a bit of a challenge to implement
                            the feature on mobile phones
                        </p>
                    </div>
                    <ul className="call-to-action">
                        <li><a href="https://marksrestaurant.netlify.com" target="_blank" rel="noopener noreferrer">View site</a></li>
                        <li><a href="https://github.com/opondo99/myRestaurant" target="_blank" rel="noopener noreferrer">Git Hub</a></li>
                    </ul>
                </div>
                <div className="card second">
                    <div className="demo"></div>
                    <div className="description">
                        <h1>Salon and Barber shop</h1>
                        <p>
                            This is a barber shop and salon website that relays
                            the business' information ,services and prices.It has three routes
                            which I created using react router and components. The responsive navigation was a bit of a challenge to create but
                            it adds a good touch on mobile devices.This project enabled me to experiment with 
                            css clip path which os very interesting to use. 
                        </p>
                    </div>
                    <ul className="call-to-action">
                        <li><a href="https://hairworks.netlify.com" target="_blank" rel="noopener noreferrer">View site</a></li>
                        <li><a href="https://github.com/opondo99/barber-shop" target="_blank" rel="noopener noreferrer">Git Hub</a></li>
                    </ul>
                </div>

                <div className="card third">
                    <div className="demo"></div>
                    <div className="description">
                        <h1>Bar and Restaurant</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Illum aperiam itaque id explicabo saepe adipisci perferendis u
                            uibusdam doloremque eligendi dolore, officiis unde natus, magni
                            dolorum voluptate provident ex exercitationem.
                        </p>
                    </div>
                    <ul className="call-to-action">
                        <li><a href="https://marksrestaurant.netlify.com" target="_blank" rel="noopener noreferrer">View site</a></li>
                        <li><a href="https://github.com/opondo99/myRestaurant" target="_blank" rel="noopener noreferrer">Git Hub</a></li>
                    </ul>
                </div>

            </div>
        </div>
        
    )
}

export default Projects;