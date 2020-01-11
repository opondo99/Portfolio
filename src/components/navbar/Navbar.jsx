import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Transition, animated } from 'react-spring/renderprops';
import './navbar.css';

class Nav extends Component {
    state = {
        showNav: false
    };

    toggle = e => this.setState({
        showNav: !this.state.showNav
    });

    render() {
        return (
            <div className="nav">
                <div className="logo">
                    <h1>Mark Opondo</h1>
                </div>
    
                <div className="burger" onClick={this.toggle}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <Transition
                    native
                    items={this.state.showNav}
                    from={{ opacity:0, left:700}}
                    enter={{ opacity:1, left: 210}}
                    leave={{ opacity:0, left: 700}}
                    config={{ delay: 300, duration:500}}
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
                
            </div>
        )
    }
    
}

export default Nav;