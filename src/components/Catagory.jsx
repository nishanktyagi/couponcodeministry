import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Heading from './Heading';



export default function Catagory() {
    let catagoryArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
       
    return (
            <Container id ="categorySection">
            <Heading heading="Our Varified catagory for you"/>
                <Row className="justify-content-center">
                    {catagoryArray.map((item,index) => {
                        return(
                        <Col className="m-2 border" xs={4} md={2} key={item}>
                          {item}
                        </Col>
                        )
                    })}
                </Row>
            </Container>
    )
}
