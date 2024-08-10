import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Heading from './Heading';

export default function Coupon() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  useEffect(() => {
    const fetchCoupon = async () => {
      let response = await fetch(`https://api.trackier.com/v2/publishers/coupons?apiKey=${import.meta.env.VITE_CAMPAIGN_API_KEY}`);
      let responseData = await response.json();

      const coupons = responseData.coupons.map((coupon) => ({
        name: coupon.campaign_name,
        code: coupon.code,
        description: coupon.description,
        status: coupon.status
      }));
      setData(coupons);
    };
    fetchCoupon();
  }, []);

  const handleGetCodeClick = (coupon) => {
    const wordToCheck = "LP";
    const description = coupon.description;
    const filteredDescription = description.includes(wordToCheck)
      ? description.substring(0, description.indexOf('LP:'))
      : description;

    setSelectedCoupon({ ...coupon, filteredDescription });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCoupon(null);
  };

  const uniqueTitles = new Set();

  return (
    <Container id="couponSection">
      <Heading heading="Our Verified Coupon For You" />
      <ul className="deal-List">
        {data.length > 0 ? (
          <Container>
            {data.slice().reverse().map((coupon, index) => {
              const description = coupon.description;
              const title = coupon.name.split('.')[0];

              if (uniqueTitles.has(title)) {
                return null;
              }

              uniqueTitles.add(title);

              const wordToCheck = "LP";
              const filteredDescription = description.includes(wordToCheck)
                ? description.substring(0, description.indexOf('LP:'))
                : description;

                const  LPURl = description.substring(description.indexOf('LP:'));
                // console.log(LPURl)


              return (
                <li key={index}>
                  <Container className="py-3 mb-4">
                    <Row className="align-items-center">
                      <Col className="col-md-3">
                        <h3 className="title">{title}</h3>
                      </Col>
                      <Col className="col-md-5 mobile-description">
                        <p>{filteredDescription}</p>
                      </Col>
                      <Col className="col-md-4 text-center position-relative">
                        <div className="coupon p-3">{coupon.code}</div>
                        <div className="codeplate p-3 pointer" onClick={() => handleGetCodeClick(coupon)}>
                          Get Code
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </li>
              );
            })}
          </Container>
        ) : (
          <p>Loading... </p>
        )}
        {selectedCoupon && (
          <Modal show={isModalOpen} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCoupon.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>Code:</strong> {selectedCoupon.code}</p>
              <p>{selectedCoupon.filteredDescription}</p>
              <p><strong>Status:</strong> {selectedCoupon.status}</p>
            </Modal.Body>
          </Modal>
        )}
      </ul>
    </Container>
  );
}
