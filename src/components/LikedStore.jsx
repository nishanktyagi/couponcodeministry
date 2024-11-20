import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Heading from './Heading';

import ajio from '../images/ajio-logo.svg';
import boat from '../images/boat.svg';
const LikedStore = () => {
    return (
        <Container>
            {/* Row 1 */}
            <Heading heading="Most Liked Store" />
            <Container className="py-2 px-4">

                <Row className="mb-4">
                    <Col className="p-1" xs={6} sm={6} md={4} lg={3}>
                    <Link to="/boat">
                        <Card className="text-center p-2">
                            <Card.Img variant="top" src={boat} />
                        </Card>
                    </Link>
                    </Col>
                    <Col className="p-1" xs={6} sm={6} md={4} lg={3}>
                    <Link to="/flipkart">
                        <Card  className="p-2">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg" />
                        </Card>
                        </Link>
                    </Col>
                    <Col className="p-1" xs={6} sm={6} md={4} lg={3}>
                    <Link to="/myntra">
                        <Card  className="p-2">
                            <Card.Img variant="top" src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-logo.svg" />
                        </Card>
                        </Link>
                    </Col>
                    <Col className="p-1" xs={6} sm={6} md={4} lg={3}>
                    <Link to="/ajio">
                        <Card  className="p-2">
                            <Card.Img variant="top" src={ajio} />
                        </Card>
                        </Link>
                    </Col>
                </Row>

                {/* Row 2 */}
                {/* <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/185" />
                            <Card.Body>
                                <Card.Text> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/185" />
                            <Card.Body>
                                <Card.Text> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/185" />
                            <Card.Body>
                                <Card.Text> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/185" />
                            <Card.Body>
                                <Card.Text> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/185" />
                            <Card.Body>
                                <Card.Text> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/185" />
                            <Card.Body>
                                <Card.Text> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
            </Container>
        </Container>
    );
};

export default LikedStore;
