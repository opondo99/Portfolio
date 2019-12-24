import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h1>Mark Opondo</h1>
            </div>
            <ul className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </div>
    )
}

export default Nav;