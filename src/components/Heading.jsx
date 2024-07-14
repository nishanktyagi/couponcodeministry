import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Heading(props) {
  return (
    <>
    <Container className="py-3  d-none d-lg-block">
      <Row className="align-items-center">
        <Col className="col-md-4"><hr/></Col>
        <Col className="text-center main-heading col-md-4">{props.heading}</Col>
        <Col className="col-md-4"><hr/></Col>
      </Row>
    </Container>
 <Container className="py-3">
<Row className="align-items-center d-block d-sm-none">
<Col className="text-center main-heading">{props.heading}</Col>
<Col><hr/></Col>
</Row>
</Container>
</>
  )
}
