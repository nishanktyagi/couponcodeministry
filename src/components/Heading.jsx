import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Heading(props) {
  return (
    <>
      <Container className="py-3  d-none d-lg-block">
        <Row className="align-items-center">
          <Col className="col-md-3"><hr /></Col>
          <Col className="text-center main-heading col-md-6"><h1>{props.heading}</h1></Col>
          <Col className="col-md-3"><hr /></Col>
        </Row>
      </Container>
      <Container className="py-3 d-block d-sm-none">
        <Row className="align-items-center flex-column">
          <Col className="text-center main-heading"><h1>{props.heading}</h1></Col>
          <Col><hr /></Col>
        </Row>
      </Container>
    </>
  )
}
