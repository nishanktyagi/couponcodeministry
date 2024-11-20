import React from 'react';
import Campaign from './Campaign';
import Deal from './Deal';
import Coupon from './Coupon';
import Footer from './Footer';
import FAQ from './Faq';
import BannerCarousel from './Bannercarousel';
import NavbarMenu from './Navbar';
import Health from './Health';
import LikedStore from './LikedStore';

import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Home() {
    return (
        <HelmetProvider>
        <div>
            <Helmet>
            <title>Couponcode Ministry - Best Coupon Codes and Deals for Online Shopping</title>
            <meta title="Couponcodeministry: Coupons, Offers and Promo Code, Deals & Discounts"/>
            <meta name="keywords" content="CouponCodeMynistry, Coupons, Discounts, Promo Codes, Offers, Online Shopping, India, Best Deals"/>
            <meta name="description" content="Save more with CouponCodeMinistry Get exclusive coupons deals and offers on top online shopping sites like Amazon coupan, Paytm coupan, Snapdeal coupan, Flipkart coupan, Myntra coupan, and many more. Shop smarter with CouponCodeMinistry today"/>
            <meta name="author" content="Couponcode Ministry"/>
            <meta name="robots" content="index, follow"/>
      </Helmet>
            <NavbarMenu/>
            <BannerCarousel />
            <LikedStore />
            <Campaign />
            <Deal />
            <Coupon />
            <FAQ />
            <Footer/>
        </div>
        </HelmetProvider>
    )
}
