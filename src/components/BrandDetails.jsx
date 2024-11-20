import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function BrandInfo(props) {

  return (
    <Container className="my-4 pt-5">
      <Row className="align-items-center  pt-5">
        <Col md={3} className="text-center">
          <Image 
            src={props.imageUrl} 
            fluid 
          />
        </Col>


        <Col md={9}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          {props.details && (
            <p><strong>Details:</strong> {props.details}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
