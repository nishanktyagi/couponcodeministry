import React from 'react';
import Heading from './Heading';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react'

export default function Deal() {
    const [data, setdata] = useState([]);
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
                                            <Col className="col-md-4 text-center dealbtn-box"> <a type="button" className="c-button btn  btn-outline-success">Status : {deal.status}</a>  <a  href={url} target="_blank" className="c-button_white-slide-button c-button btn">Get Deal</a></Col>
                                        </Row>
                                    </Container>
                                </li>
                            );
                        })}
                    </Container>
                ) : <p>Loading... </p>}
            </ul>
        </Container>
    )
}
