import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import demoInp from '../../assets/images/demo/img1.jpg';

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
        };
        return (
            <Container>
                <Row>
                    <Col>
                        <Slider {...settings}>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                            <div className="p-2">
                                <img src={demoInp} className="img-fluid" alt="" />
                                <p className="small mb-0"><small>DAUDPUR, RUPGANJ</small></p>
                                <p className="font-weight-bold mb-0">Agla Goverment Primary School</p>
                                <p className="text-muted small">42$ per person</p>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        );
    }
}
