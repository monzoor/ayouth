import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import heroImg from '../../assets/images/hero-1.jpg';

const bgimg = {
    background: `linear-gradient(to right, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0) 100%), url(${heroImg}) no-repeat right / cover`,
};

const Hero = () => (
    <Row className="hero minvh-100" style={bgimg}>
        <Col className="align-self-center ml-md-5 pl-md-5">
            <h1 className="text-white mb-5 text-left">
                GIVE
                <br />
                SCHOLARSHIP
                <br />
                ONLINE
            </h1>
            <p className="text-white">Directly for the students in Goverment Promary School throughout Bangladesh</p>
            <Link to="/" className="btn btn-primary">Prevent dropout</Link>
        </Col>
    </Row>
);

export default Hero;
