import React from 'react';
import Heading from './Heading';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react'

export default function Deal() {
    const [data, setdata] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    useEffect(() => {
        const fetchDeal = async () => {
            let response = await fetch(`https://api.trackier.com/v2/publishers/deals?apiKey=${import.meta.env.VITE_CAMPAIGN_API_KEY}`)
            let responseData = await response.json();

            const deal = responseData.deals.map((deal) => ({
                id: deal.deal_id,
                name: deal.campaign_name,
                status: deal.status,
                description: deal.description,
                created: deal.created,
                url: deal.tracking_link
            }))
            setdata(deal)
        }
        fetchDeal()
    }, [])

    const filteredData = data.filter(item => item.url);

    const handleGetCodeClick = (deal) => {
        setSelectedCoupon({ ...deal });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCoupon(null);
    };


    return (
        <Container id="dealSection">
            <Heading heading="Our Varified Deal For You" />
            <ul className="deal-List">
                {filteredData.length > 0 ? (
                    <Container className="p-0">
                        {filteredData.slice().reverse().map((deal, index) => {
                            const description = deal.description;
                            const title = deal.name.split('.');
                            const specificTitle = title[0]

                            const url = deal.url;

                            return (
                                <li key={index}>
                                    <Container className="py-3 mb-4">
                                        <Row className="align-items-center">
                                            <Col className="col-md-3"><a href={url}> <h3 className="title">{specificTitle}</h3></a></Col>
                                            <Col className="col-md-5"> <p>{description}</p></Col>
                                            <Col className="col-md-4 text-center dealbtn-box">
                                                <a type="button" className="c-button btn  btn-outline-success">Status : {deal.status}</a>
                                                <a type="button" href={url} target="_blank" className="c-button_white-slide-button c-button btn" onClick={() => handleGetCodeClick(deal)}>Get Deal</a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </li>
                            );
                        })}
                    </Container>
                ) : <p>Loading... </p>}
                {selectedCoupon && (
                    <Modal show={isModalOpen} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header className="text-center" closeButton>
                            <Modal.Title>{selectedCoupon.specificTitle}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                            <p>{selectedCoupon.description}</p>
                            <div className="c-button btn btn-outline-success"> Deal activated.</div>
                            <div className="text-center">
                                <a type="button" href={selectedCoupon.url} target="_blank" rel="noopener noreferrer" className="c-button_white-slide-button c-button btn">Visit Store</a>
                            </div>
                        </Modal.Body>
                    </Modal>
                )}
            </ul>
        </Container>
    )
}
