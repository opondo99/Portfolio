import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition, animated } from 'react-spring/renderprops';
import './navbar.css';

const Nav = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen ] = useState(false);


    const toggle = e => {
        setIsNavVisible(!isNavVisible);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
    });

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };
    // state = {
    //     showNav: false
    // };

    // toggle = e => this.setState({
    //     showNav: !this.state.showNav
    // });

    return (
        <div className="nav">
            <div className="logo">
                <h1>Mark Opondo</h1>
            </div>

            <div className="burger" onClick={toggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {( isNavVisible || !isSmallScreen ) && (
                <Transition
                    native
                    items={( isNavVisible || !isSmallScreen )}
                    from={{ opacity:0, left:700}}
                    enter={{ opacity:1, left: 210}}
                    leave={{ opacity:0, left: 700}}
                    config={{ delay: 300, duration:400}}
                >
                    {show => show && (props => (
                        <animated.div style={props} className="phoneview">
                            <ul className="links">
                                <Link to="/">Home</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>
                            </ul>
                        </animated.div>
                    ))}
                
                </Transition>
            )}
                
            
        </div>
    )
    
    
}

export default Nav;