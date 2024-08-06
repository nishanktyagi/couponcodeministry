import React from 'react';
import Campaign from './Campaign';
import Deal from './Deal';
import Coupon from './Coupon';
import Footer from './Footer';
import FAQ from './Faq';
import BannerCarousel from './Bannercarousel';
import NavbarMenu from './Navbar';



export default function Home() {
    return (
        <div>
            <NavbarMenu/>
            <BannerCarousel />
            <Campaign />
            <Deal />
            <Coupon />
            <FAQ />
            <Footer/>
        </div>
    )
}
