/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';

class HeadBar extends React.Component {
    state = {
        isOpen: false,
    }

    buttonToggle = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen,
        });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className="nav">
                <Navbar color="faded" light>
                    <button className={`btn menu-toggler ${isOpen ? 'fly' : ''}`} onClick={this.buttonToggle} type="button">
                        <div className={`animated-icon3 ${isOpen ? 'show' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <Collapse className={`bg-white p-3 ${isOpen ? 'show' : ''}`} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to="/" className="navbar-brand">Alteryouth</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/schools" className="nav-link">Schools</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link mb-2">About Us</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/signup" className="btn btn-primary btn-block mb-2">Prevent dropouts</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/login" className="btn btn-outline-primary btn-block">Login</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default HeadBar;
