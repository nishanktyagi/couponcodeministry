// import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default function Campaign() {
//   const [campaigns, setCampaigns] = useState(null);
//   // const [visibleItems, setVisibleItems] = useState([]);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await fetch('https://api.trackier.com/v2/publisher/campaigns?apikey=65758e75e244fcdefe79ff5ec7665758e75e2476', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'mode': 'no-cors',
//             'Authorization': 'Bearer 65758e75e244fcdefe79ff5ec7665758e75e2476' 
//           },
//         });


//           const responseData = await response.json();
//           const simplifiedCampaigns = responseData.data.campaigns.map(campaign => ({
//             id: campaign.id,
//             preview_url: campaign.preview_url,
//             title: campaign.title,
//             previewUrl: campaign.thumbnail,
//             category: campaign.categories,
//             description: campaign.description,
//             trackingUrl: campaign.tracking_link,
//           }));
//           setCampaigns(simplifiedCampaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };
//     fetchCampaigns();
//   }, []);


//   const extractTextFromHtml = (html) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     return doc.body.textContent;
//   };
//   const uniqueTitles = new Set();

//   return (
//     <Container id="campaignSection">
//       <Heading heading="Our Varified Campaign For You" />
//       {campaigns ? (
//         <Container>
//           <ul className="campaign-List">
//             {campaigns.map(campaign => {
//               const campaignText = campaign.discription;
//               const extractedDescription = extractTextFromHtml(campaignText);

//               const paragraph = extractedDescription;
//               const descriptionIndex = paragraph.indexOf("Description:");
//               const conversionFlowIndex = paragraph.indexOf("Conversion Flow:");
//               const specificPart = paragraph.substring(descriptionIndex, conversionFlowIndex).trim();


//               const title = campaign.title.split('.');
//               const specificTitle = title[0]

//               if (uniqueTitles.has(specificTitle)) {
//                 return null;
//               }

//               uniqueTitles.add(specificTitle)
//               return (
//                 <li key={campaign.id}>
//                   <Container className="py-3 mb-4">
//                     <Row className="align-items-center">
//                       <Col className="col-md-2"><a type="button" href={campaign.trackingUrl} target="_blank"><img src={campaign.previewUrl} alt={campaign.title} className="campaignImage" /></a></Col>
//                       <Col className="col-md-3"><a type="button" href={campaign.trackingUrl} target="_blank">  <h3 className="title">{specificTitle}</h3> </a><p className="category">Category : {campaign.category}</p></Col>
//                       <Col className="col-md-5 mobile-description"> <p>{specificPart}</p></Col>
//                       <Col className="col-md-2 text-center"> <a type="button" href={campaign.trackingUrl} target="_blank" className="c-button_white-slide-button c-button btn">Get Offer</a> {/* Render the extracted description */}</Col>
//                     </Row>
//                   </Container>
//                 </li>

//               );
//             })}
//           </ul>

//         </Container>) : (<p>Loading....</p>)}
//     </Container>
//   )
// }

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import NavbarMenu from './Navbar';
import Heading from './Heading';
import data from './services/converteddata.json';

const Home = () => {
  const [groupedData, setGroupedData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

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
    <div>
      <NavbarMenu />
      <Heading heading="Find the Latest Coupon Codes & Save Instantly on Every Purchase!" />
      {Object.keys(groupedData).length > 0 && groupedData['Home'] ? (
        <div>
          <Container>
            <ul className="campaign-List">
            <Row className="px-2">
              {groupedData['Home'].map((item, i) => {
                return (
                  <li className="col-md-3 col-sm-12 deal-box" key={i}>
                    <Container className="py-2">
                      <Row className="align-items-center flex-column">
                        <Col>
                          <h3 className="title">{item.campaignName}</h3>
                        </Col>
                        <Col className="mobile-description">
                          <p>{item.offer}</p>
                        </Col>
                        <Col className="text-center position-relative">
                          <a type="button" href={item.trackingURL} target="_blank" rel="noopener noreferrer" className="c-button_white-slide-button c-button btn" onClick={() => handleGetCodeClick(item)}>Get Offer</a>
                        </Col>
                      </Row>
                    </Container>

                  </li>
                );
              })}
              </Row>
            </ul>
          </Container>
        </div>
      ) : (
        <p>Loading Data...</p>
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
    </div>
  );
};

export default Home;
