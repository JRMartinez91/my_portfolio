//This page displays a header bar at the top of the page
//and buttons linking to the other main sections of the site:
//Projects, Resume, Contact, Bio, Links

import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Homepage extends Component {
    render(){
        return(
            <>
            <h1>Homepage</h1>
            <div className="linkbox-wrapper">
                <div className="linkbox">
                    <Link to="/projects">
                        <div className="link-image">
                            <div className="link-image-bg"></div>
                            <img alt="Projects"/>
                            <p>Projects</p>
                        </div>
                    </Link>
                    <Link to="/bio">
                        <div className="link-image">
                            <div className="link-image-bg"></div>
                            <img alt="Bio"/>
                            <p>Bio</p>
                        </div>
                    </Link>
                    <Link to="/resume">
                        <div className="link-image">
                            <div className="link-image-bg"></div>
                            <img alt="Resume"/>
                            <p>Links</p>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="link-image">
                            <div className="link-image-bg"></div>
                            <img alt="Contact"/>
                            <p>Contact</p>
                        </div>
                    </Link>
                    <Link to="/links">
                        <div className="link-image">
                            <div className="link-image-bg"></div>
                            <img alt="Links"/>
                            <p>Links</p>
                        </div>
                    </Link>
                </div>
            </div>
            </>
        )
    }
}

export default Homepage