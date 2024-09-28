import React, { useState } from 'react';
import { Accordion, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './Heading';

const FAQ = () => {
  const [showMore, setShowMore] = useState(false);

  const questions = [
    {
      question: "What is a coupon code website?",
      answer: "A coupon code website is a platform where users can find discounts, deals, and promotional codes for various products and services offered by online retailers and service providers."
    },
    {
      question: "How does a coupon code website work?",
      answer: "Coupon code websites aggregate discount codes and deals from various sources and display them on their platform. Users can search for specific stores or products and then apply the provided coupon codes during checkout on the respective retailer's website to avail of discounts."
    },
    {
      question: "Are the coupon codes on your website verified?",
      answer: "Yes, we regularly verify and update the coupon codes listed on our website to ensure they are valid and active."
    },
    {
      question: "Do I need to sign up or register to use the coupon codes?",
      answer: "No, most coupon code websites allow users to browse and use coupon codes without requiring them to create an account. However, creating an account might provide additional benefits such as personalized recommendations and notifications about new deals."
    },
    {
      question: "How often are new coupon codes added to the website?",
      answer: "New coupon codes are added to the website regularly, typically on a daily or weekly basis, depending on the availability of new deals from retailers."
    },
    {
      question: "Can I submit a coupon code to be featured on your website?",
      answer: "Yes, we welcome submissions of coupon codes from both retailers and users. Our team will review the submitted codes for validity and relevance before publishing them on the website. Fill the Form of Contact US with your coupon Code Details."
    },
    {
      question: "Do you have exclusive coupon codes available on your website?",
      answer: "Yes, we often negotiate exclusive deals and discounts with retailers to offer our users unique coupon codes that may not be available elsewhere."
    },
    {
      question: "How do I redeem a coupon code from your website?",
      answer: "To redeem a coupon code, simply click on the code you want to use, and you will be redirected to the retailer's website. Enter the code during the checkout process on the retailer's website to apply the discount to your purchase."
    },
    {
      question: "Are there any restrictions or limitations on using coupon codes?",
      answer: "Coupon codes may be subject to certain restrictions and limitations, such as minimum purchase requirements, expiration dates, and exclusions on certain products or brands. Be sure to read the terms and conditions associated with each coupon code before using it."
    }
  ];

  return (
    <Container className="my-4" id="helpSection">
        <Heading heading="Frequently Asked Questions"></Heading>
      <Accordion>
        {questions.slice(0, showMore ? questions.length : 4).map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <div className="text-center mt-3">
        <Button className="c-button_white-slide-button c-button btn btn-primary" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </Container>
  );
};

export default FAQ;
