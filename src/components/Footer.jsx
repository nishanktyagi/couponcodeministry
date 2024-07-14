import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo.jpg';

function Footer() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleAboutModalOpen = () => setIsAboutModalOpen(true);
  const handleAboutModalClose = () => setIsAboutModalOpen(false);

  const handleTermsModalOpen = () => setIsTermsModalOpen(true);
  const handleTermsModalClose = () => setIsTermsModalOpen(false);

  return (
    <Container id="contactSection" fluid className="p-0">
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px 0' }}>
        <Container>
          <Row className="justify-content-center socialMeda-links">
            <a href="https://www.facebook.com/couponcodeministry.in" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0800', marginRight: '20px' }}>
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.instagram.com/couponcodeministry/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0800', marginRight: '20px' }}>
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a href="https://www.linkedin.com/company/couponcodeministry/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0800', marginRight: '20px' }}>
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </Row>
          <div className="footerlogo">
            <img className="d-block mx-auto my-4" src={logo} alt="logo" />
          </div>
          <div className="welcomeLne text-center">
            <p>
              Welcome to Coupon Code Ministry – your ultimate destination for incredible savings and unbeatable deals! We're passionate about helping you stretch your hard-earned rupee further by bringing you the hottest coupon codes, exclusive offers, and discounts from your favourite brands and retailers.
            </p>
          </div>
          <div className="text-center">
            <Button className="c-button_white-slide-button c-button" onClick={handleAboutModalOpen}>
              About Us
            </Button>
            <Button className="c-button_white-slide-button c-button" onClick={handleTermsModalOpen}>
              Terms and Conditions
            </Button>
          </div>
        </Container>

        <Container className="mt-3">
          <Col className="text-center p-0">
            <p className="m-0">&copy; 2024 Couponcode Ministry. All rights reserved.</p>
          </Col>
        </Container>
      </footer>

      <Modal show={isAboutModalOpen} onHide={handleAboutModalClose}>
        <Modal.Header closeButton>
        <Modal.Title>About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome to Coupon Code Ministry – your ultimate destination for incredible savings and unbeatable deals! We're passionate about helping you stretch your hard-earned rupee further by bringing you the hottest coupon codes, exclusive offers, and discounts from your favourite brands and retailers.
          <h2> Our Mission</h2>
          <p>
            At Coupon Code Ministry, our mission is simple: to be your go-to source for all things savings. We understand the thrill of finding a fantastic deal, and we're dedicated to curating a platform that makes your shopping experience more rewarding than ever. Whether you're a seasoned coupon or just starting your journey into the world of discounts, we're here to guide you every step of the way.
          </p>
          <h2> What We Offer </h2>
          <p>
            1.	Verified Coupon Codes: Our team scours the internet to bring you verified and up-to-date coupon codes that can help you save on a wide range of products and services. No more frustration with expired or non-working codes – we've got you covered!</p>
          <p> 2.	Diverse Categories: From fashion and electronics to travel and home decor, our extensive selection of categories ensures that you'll find deals on items you're genuinely interested in.</p>
          <p> 3.	Exclusive Offers: We're committed to partnering with brands to secure exclusive offers that you won't find anywhere else. Our aim is to provide you with unique opportunities to save big.</p>
          <p>  4.	Tips and Advice: Saving money is an art, and we're here to help you master it. Our blog features insightful articles, tips, and strategies to help you make the most of your couponing endeavours.</p>

          <h2>  Why Choose Us?</h2>
          <p> 1.	Reliability: We take pride in offering only verified and working coupon codes, ensuring that your shopping experience is frustration-free. </p>
          <p> 2.	Ease of Use: Our user-friendly platform makes it a breeze to find the deals you're looking for. Search by category, brand, or product to discover the best discounts tailored to your preferences.</p>
          <p> 3.	Community: We're more than just a website; we're a community of smart shoppers who share the same goal – to save money while getting the most out of our purchases.</p>
          <p> 4.	Transparency: We're upfront about how our platform operates. Our users' trust is essential to us, and we're committed to maintaining transparency in everything we do.</p>
          <h2>  Join the Savings Revolution! </h2>
          <p> Whether you're looking for that perfect outfit, upgrading your tech gadgets, or planning an unforgettable getaway, Coupon code Ministry is here to help you unlock incredible savings. Join our community of smart shoppers, and let's embark on a journey of discovering exciting deals together.</p>
          <p> If you have any questions or suggestions, feel free to reach out to us at Contact@couponcodeministry.com. Thank you for choosing https://www.couponcodeministry.com as your partner in savings! </p>



        </Modal.Body>
      </Modal>

      <Modal show={isTermsModalOpen} onHide={handleTermsModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Coupon Code Ministry <a href="https://www.couponcodeministry.com">https://www.couponcodeministry.com</a>, you acknowledge and agree to be bound by these Terms and Conditions of Use. If you do not agree with any of these terms, please refrain from using the Website.</p>

          <h2>2. Coupon Codes and Deals</h2>
          <p><strong>A.</strong> The Website provides coupon codes, deals, and promotional offers for various products and services. While we strive to ensure accuracy, we do not guarantee the availability or validity of any coupon codes or deals. Users should verify the information before making a purchase.</p>
          <p><strong>B.</strong> Users understand that coupon codes and deals may have expiration dates, usage restrictions, and terms set by the respective brands or retailers. It is the user's responsibility to read and adhere to these terms.</p>

          <h2>3. User Responsibilities</h2>
          <p><strong>A.</strong> Users agree to use the Website in compliance with all applicable laws and regulations.</p>
          <p><strong>B.</strong> Users are solely responsible for their interactions with brands, retailers, and third-party websites linked to the Website.</p>
          <p><strong>C.</strong> Users must not engage in any activity that may disrupt or interfere with the website's proper functioning or compromise its security.</p>

          <h2>4. User Accounts</h2>
          <p><strong>A.</strong> Users may create accounts on the Website to access additional features and services. Users are responsible for maintaining the confidentiality of their account information and passwords.</p>
          <p><strong>B.</strong> Users agree to provide accurate and truthful information when creating an account. Any use of false or misleading information may result in account suspension or termination.</p>

          <h2>5. Intellectual Property</h2>
          <p><strong>A.</strong> All content on the Website, including text, graphics, logos, images, and software, is protected by intellectual property laws and is the property of the Coupon Code Ministry or its licensors.</p>
          <p><strong>B.</strong> Users may not reproduce, distribute, modify, or use any content from the Website without the explicit permission of Coupon Code Ministry.</p>

          <h2>6. Privacy</h2>
          <p>The collection and use of user data are governed by our Privacy Policy, which is available on the Website. Users consent to the practices outlined in the Privacy Policy by using the Website.</p>

          <h2>7. Disclaimer of Warranty</h2>
          <p>The Website and its content are provided "as is" without any warranties, either express or implied.</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Footer;
