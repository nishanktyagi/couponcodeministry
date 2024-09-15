import React from 'react';
import Footer from './Footer';
import BannerCarousel from './Bannercarousel';
import NavbarMenu from './Navbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Amazon() {

  const products = [
    {
      asin: "B08FZS992L",
      title: "Adidas mens Clinch-X M CBLACK/FTWWHT Sneaker - 9 UK (EW2465)",
      imageUrl: "https://m.media-amazon.com/images/I/41wWvZxkW8L._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B08FZS992L?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "50%"
    },
    {
      asin: "B09N3P4MND",
      title: "Adidas Men Synthetic & Textile WideWalk M Walking Shoes CBLACK/PULBLU/PULOLI UK-9",
      imageUrl: "https://m.media-amazon.com/images/I/41HgRvmMXcL._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B09N3P4MND?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "72%"
    },
    {
      asin: "B0C4DNZXS6",
      title: "Adidas Men Synthetic Courun avnt M, Running Shoes, SILGRN/CBLACK, UK-8",
      imageUrl: "https://m.media-amazon.com/images/I/31e9luBzWbL._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B0C4DNZXS6?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "44%"
    },
    {
      asin: "B0BJL21YW1",
      title: "adidas Mens VS PACE 2.0 FTWWHT/CBLACK/FTWWHT Running Shoe - 8 UK (HP6010)",
      imageUrl: "https://m.media-amazon.com/images/I/21BlQhxNFKL._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B0BJL21YW1?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "44%"
    },
    {
      asin: "B09N3PTQRK",
      title: "Adidas Mens Fleecewalk M BLUNIT/IMPYEL/PULBLU Walking Shoe - 8 UK (GB2392)",
      imageUrl: "https://m.media-amazon.com/images/I/41-S+nA6mIL._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B09N3PTQRK?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "72%"
    },
    {
      asin: "B07M8S437J",
      title: "Adidas Mens Drogo M CBLACK/FTWWHT Running Shoes 8 UK (CL4154)",
      imageUrl: "https://m.media-amazon.com/images/I/4197EWR7jvL._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B07M8S437J?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "43%"
    },
    {
      asin: "B096NCQD8Y",
      title: "Adidas mens Adi Zoom M CBLACK/ACIYEL Sneaker - 10 UK (GA0871)",
      imageUrl: "https://m.media-amazon.com/images/I/31Vt9hHja2L._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B096NCQD8Y?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "72%"
    },
    {
      asin: "B0BJKZK9WJ",
      title: "Adidas Mens Flodean M CBLACK/DOVGRY Walking Shoe - 10 UK (GC0569)",
      imageUrl: "https://m.media-amazon.com/images/I/31BJY59P+QL._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B0BJKZK9WJ?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "60%"
    },
    {
      asin: "B0B3JSMK7B",
      title: "Adidas Men Synthetic & Textile RunSheen M Running Shoes DKGREY/CBLACK/DOVGRY/ACTGOL UK-8",
      imageUrl: "https://m.media-amazon.com/images/I/51CNYniBUbL._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B0B3JSMK7B?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "71%"
    },
    {
      asin: "B0CPVQ95W5",
      title: "adidas mens AstoundRun M BLUNIT/CONAVY/STONE/ACTGOL Running Shoe - 8 UK (GB1793)",
      imageUrl: "https://m.media-amazon.com/images/I/41RxdSNSceL._SL160_.jpg",
      productUrl: "https://www.amazon.in/dp/B0CPVQ95W5?tag=couponcodem00-21&linkCode=osi&th=1&psc=1",
      discount: "51%"
    }
  ];
  const ProductCard = ({ title, imageSrc, link, discount }) => {
    return (
      <Card className="shadow-sm">
        <div className="position-relative">
          <Card.Img variant="top" src={imageSrc} alt={title} />
          {discount && (
            <span className="badge bg-danger position-absolute top-0 end-0 m-2">
              {discount}
            </span>
          )}
        </div>
        <Card.Body>
          <Card.Title>
            <a
              href={link}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              {title}
            </a>
          </Card.Title>
          <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
            View Product
          </Button>
        </Card.Body>
      </Card>
    );
  };


  return (
    <>
      <NavbarMenu />
      <BannerCarousel />
      <Container className="my-4">
        <Row>
          {products.map((product) => (
            <Col key={product.asin} md={6} lg={3} className="mb-4">
              <ProductCard
                title={product.title}
                imageSrc={product.imageUrl}
                link={product.productUrl}
                discount={product.discount}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  ); 
}
