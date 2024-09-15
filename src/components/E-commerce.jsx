import React, { useEffect, useState } from 'react';
import data from './services/converteddata.json';  

import Footer from './Footer';
import BannerCarousel from './Bannercarousel';
import NavbarMenu from './Navbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ECommerce = () => {
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    const categorizeData = () => {
      const categoryMap = {};

      data.forEach((item) => {
        const { category } = item;

        if (!categoryMap[category]) {
          categoryMap[category] = [];
        }

        categoryMap[category].push(item);
      });
      return categoryMap;
    };

    const grouped = categorizeData();
console.log(grouped)
    setGroupedData(grouped);
  }, []);

  return (
    <div>
      <NavbarMenu />
      <BannerCarousel />

      {Object.keys(groupedData).length > 0 && groupedData['E-commerce'] ? (
        <div>
           <Container>
           <ul className="campaign-List">
            {groupedData['E-commerce'].map((item, i) => {
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
                      <a type="button" href={item.trackingURL} target="_blank" className="c-button_white-slide-button c-button btn">Get Offer</a>
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
        <p>Loading ECommerce category...</p>
      )}
      <Footer />
    </div>
  );
};

export default ECommerce;
