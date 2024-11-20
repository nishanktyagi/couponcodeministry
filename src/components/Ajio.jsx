import React, { useEffect, useState } from 'react';
import data from './services/converteddata.json';
import Footer from './Footer';
import BrandInfo from './BrandDetails';
import Heading from './Heading';
import ajio from '../images/ajio-logo.svg';

import NavbarMenu from './Navbar';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Ajio() {
    const [groupedData, setGroupedData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState(null);
  
    useEffect(() => {
      const brandData = () => {
        const brandMap = {};
  
        data.forEach((item) => {
          const { brand } = item;
  
          if (!brandMap[brand]) {
            brandMap[brand] = [];
          }
  
          brandMap[brand].push(item);
        });
        return brandMap;
      };
  
      const grouped = brandData();
      setGroupedData(grouped);
    }, []);
  
  
    const handleGetCodeClick = (item) => {
      setSelectedCoupon({ ...item });
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedCoupon(null);
    };
  
  
    return (
      <HelmetProvider>
      <div>
         <Helmet>
                    <title>Get Ajio Coupons  Promo Codes Coupon Code </title>
                    <meta name="description" content="Get Ajio Coupons  Promo Codes Coupon Code Today apply these code and enjoy your shoping at couponcodeministry" />
                </Helmet>  
        <NavbarMenu />

        <BrandInfo
          imageUrl={ajio}
          name="Ajio"
          description="Ajio is a multinational technology company focused on e-commerce, cloud computing, and artificial intelligence. Founded in 1994 by Jeff Bezos, Ajio is one of the largest online marketplaces globally, providing a wide range of products and services."
        />
  
        {Object.keys(groupedData).length > 0 && groupedData['Ajio'] ? (
          <div>
            <Container>
            <Heading heading="Best Deals of Ajio" />
              <ul className="campaign-List">
                {groupedData['Ajio'].map((item, i) => {
                  return (
                    <li key={i}>
                      <Container className="py-3 mb-4">
                        <Row className="align-items-center">
                          <Col className="col-md-3">
                            <h3 className="title">{item.campaignName}</h3>
                          </Col>
                          <Col className="col-md-5 mobile-description">
                            <p>{item.offer}</p>
                          </Col>
                          <Col className="col-md-4 text-center position-relative">
                            <a type="button" href={item.trackingURL} target="_blank" rel="noopener noreferrer"
                             className="c-button_white-slide-button c-button btn" onClick={() => handleGetCodeClick(item)}>Get Offer</a>
                          </Col>
                        </Row>
                      </Container>
  
                    </li>
                  );
                })}
              </ul>
            </Container>
          </div>
        ) : (
          <p>Loading Best Deals and Offer For You...</p>
        )}
        {selectedCoupon && (
          <Modal show={isModalOpen} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header className="text-center" closeButton>
              <Modal.Title>{selectedCoupon.campaignName}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p>{selectedCoupon.offer}</p>
              <div className="c-button btn btn-outline-success"> Offer activated.</div>
              <div className="text-center">
                <a type="button" href={selectedCoupon.trackingURL} target="_blank" className="c-button_white-slide-button c-button btn">Visit Store</a>
              </div>
            </Modal.Body>
          </Modal>
        )}
        <Footer />
      </div>
      </HelmetProvider>
    );
}
