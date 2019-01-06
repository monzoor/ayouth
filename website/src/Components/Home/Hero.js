import React from 'react';
import { Row, Col } from 'reactstrap';
import heroImg from '../../assets/images/hero-1.jpg';

const bgimg = {
    background: `linear-gradient(to right, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0) 100%), url(${heroImg}) no-repeat center center / cover`,
};

const Hero = () => (
    <Row className="hero minvh-100" style={bgimg}>
        <Col className="align-self-center">
            <h1 className="text-primary pt-5 text-center">START SHOLARSHIP ONLINE</h1>
        </Col>
    </Row>
);

export default Hero;
