import React from 'react';
import {
    Row, Col, Container, Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

const Video = () => (
    <Container className="my-5">
        <Row className="minvh-100">
            <Col xs="12" className="text-center">
                <p>Only if we could prevent dropouts in Government Primary Shools</p>
                <p className="h1 font-weight-bold mb-0">Bangladesh would be Literate</p>
            </Col>
            <Col xs="12" md="7" className="p-0">
                <iframe title="video" width="100%" height="100%" src="https://www.youtube.com/embed/nRrD46ExEzs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </Col>
            <Col xs="12" md="5" className="border p-4 pt-5">
                <p className="h3 mb-0">Literacy Scholarship</p>
                <p>TK 950/month</p>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Enter Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Email" />
                    </FormGroup>
                    <Button color="primary" block>Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
);

export default Video;
