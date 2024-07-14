import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './components/Navbar';
import BannerCarousel from './components/Bannercarousel';
import '../src/App.css'
import Catagory from './components/Catagory';
import Campaign from './components/Campaign';
import Deal from './components/Deal';
import Coupon from './components/Coupon';
import Footer from './components/Footer';
import FAQ from './components/Faq';

function App() {

  return (
    <>
    <NavbarMenu />
    <BannerCarousel/>
    {/* <Catagory/> */}
    <Campaign/>
    <Deal/>
    <Coupon/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default App
