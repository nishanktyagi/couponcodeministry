import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
      <title>Couponcode Ministry - Best Coupon Codes and Deals for Online Shopping</title>
      <meta title="Couponcodeministry: Coupons, Offers and Promo Code, Deals & Discounts"/>
    <meta name="keywords" content="CouponCodeMynistry, Coupons, Discounts, Promo Codes, Offers, Online Shopping, India, Best Deals"/>
    <meta name="description" content="Save more with CouponCodeMinistry Get exclusive coupons deals and offers on top online shopping sites like Amazon coupan, Paytm coupan, Snapdeal coupan, Flipkart coupan, Myntra coupan, and many more. Shop smarter with CouponCodeMinistry today"/>
    <meta name="author" content="Couponcode Ministry"/>
    <meta name="robots" content="index, follow"/>
      </Helmet>
      {children}
    </div>
  );
}
