import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../../assets/images/story.png';

const bgimg = {
    backgroundImage: `url(${heroImg})`,
};

const Story = () => (
    <Row className="story">
        <Container>
            <Row className="minvh-100">
                <Col xs="12" md="4" className="align-self-center">
                    <h1 className="text-white text-left">
                        <strong>
                            {'Khoka\'s '}
                        </strong>
                        <span className="font-weight-light">Story</span>
                    </h1>
                    <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae voluptatibus eius doloremque harum voluptatem hic vel, id sit, facilis at distinctio fugiat labore aut eveniet iusto sed ipsa nemo perspiciatis? Molestias officia laudantium alias adipisci et culpa debitis accusamus nam laborum fuga, iure facere in autem modi earum temporibus illum!</p>
                    <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae voluptatibus eius doloremque harum voluptatem hic vel, id sit, facilis at distinctio fugiat labore aut eveniet iusto sed ipsa nemo perspiciatis? Molestias officia laudantium alias adipisci et culpa debitis accusamus nam laborum fuga, iure facere in autem modi earum temporibus illum!</p>
                </Col>
                <Col xs="12" md="8" className="story--bg" style={bgimg}>
                    &nbsp;
                </Col>
            </Row>
        </Container>
    </Row>
);

export default Story;
