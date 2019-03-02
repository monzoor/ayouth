import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import demoInp from '../../assets/images/demo/student.jpg';

export default class StudentsSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Container>
                <Row>
                    <Col>
                        <Slider {...settings}>
                            <div>
                                <Row>
                                    <Col xs="12" md="6">
                                        <img src={demoInp} className="img-fluid" alt="" />
                                    </Col>
                                    <Col xs="12" md="6" className="text-center">
                                        <p className="text-primary">I want to be an Engineer</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis deleniti, sapiente esse temporibus facere non quis beatae aliquid accusantium!</p>
                                        <Col xs="10" className="mx-auto border">
                                            <p className="h2 text-primary">Monzoor Morshed Mahmud</p>
                                            <p className="lead">CLASS 3 · ROLL 5</p>
                                            <p className="h4">Agla Goverment Primary School</p>
                                            <p className="text-primary">
                                                <i className="fas fa-map-marker-alt" />
                                                Kendua, Daudpur Union, Rupganj Upazila, Narayanganj
                                            </p>
                                            <Row>
                                                <Col xs="4">
                                                    <FontAwesomeIcon icon={['fas', 'futbol']} />
                                                    {/* <i className="fas fa-futbol">&nbsp;</i> */}
                                                    Game
                                                    <br />
                                                    Football
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        );
    }
}
