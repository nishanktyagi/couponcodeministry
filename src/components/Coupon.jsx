import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Heading from './Heading';

export default function Coupon() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const fetchCoupon = async () => {
      let response = await fetch(`https://api.trackier.com/v2/publishers/coupons?apiKey=65758e75e244fcdefe79ff5ec7665758e75e2476`);
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

  // Function to toggle expanded state for a particular index
  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Container id="couponSection">
      <Heading heading="Our Verified Coupon For You" />
      <ul className="deal-List">
      <Row>
        {data.length > 0 ? 
            data.slice().reverse().map((coupon, index) => {
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

              const LPURl = description.substring(description.indexOf('LP:'));

              const words = filteredDescription.split(' ');
              const isLongText = words.length > 30;

              // Determine if the current item is expanded or not
              const isExpanded = expandedIndex === index;

              return (
                <li className="col-md-3 col-sm-12 deal-box" key={index}>
                  <Container className="py-2">
                    <Row className="align-items-center flex-column">
                      <Col>
                        <h3 className="title">{title}</h3>
                      </Col>
                      <Col className="mobile-description">
                        <p>
                          {/* Show the description text, either full or truncated */}
                          {isExpanded ? filteredDescription : words.slice(0, 30).join(' ') + (isLongText ? '...' : '')}

                          {/* Show 'See More' or 'See Less' button if description is long */}
                          {isLongText && (
                            <span onClick={() => toggleExpanded(index)} className="btn-link cursor-pointer">
                              {isExpanded ? 'See Less' : 'See More'}
                            </span>
                          )}
                        </p>
                      </Col>
                      <Col className="text-center mb-3 position-relative">
                        <div className="coupon p-3">{coupon.code}</div>
                        <div className="codeplate p-3  pointer" rel="noopener noreferrer" onClick={() => handleGetCodeClick(coupon)}>
                          Get Code
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </li>
              );
            })
        : (
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
       </Row>
      </ul>
    </Container>
  );
}
