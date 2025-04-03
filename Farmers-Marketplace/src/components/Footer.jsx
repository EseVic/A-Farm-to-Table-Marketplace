import React from "react";
import { AiOutlineCopyright, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      {/* Contact Section */}
      <div className="contact-foot-width container mx-auto flex flex-wrap justify-between">
        <FooterSocial />
        <FooterQuicklink />
        <FooterAddress />
        <NewsletterFooter />
      </div>

      {/* Copyright */}
      <CopyrightFooter />
    </footer>
  );
};

// Footer Social Component
const FooterSocial = () => {
  return (
    <div>
      <div className="footer-image-resize">
        <img src="/footer.png" alt="Farm" />
      </div>
      <p>
        Farmers-marketplace is an online agricultural store and marketplace for
        farm input, agricultural equipment, where you can conveniently and safely shop.
      </p>
      <h2 className="main-green pt-4 font-bold pb-2 push-top">Our Social Page</h2>
      <div className="flex gap-3 footer-social-flex">
        <div className="social-cover">
          <FaFacebookF className="grays" />
        </div>
        <div className="social-cover">
          <BsTwitter className="grays" />
        </div>
        <div className="social-cover">
          <FaLinkedinIn className="grays" />
        </div>
      </div>
    </div>
  );
};

// Footer Quick Links
const FooterQuicklink = () => {
  return (
    <div>
      <h1 className="main-green mid font-bold">Quick Links</h1>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Marketplace</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/PrivacyPolicy">
          <li>Privacy Policy</li>
        </Link>
        <Link to="/help">
          <li>FAQs</li>
        </Link>
      </ul>
    </div>
  );
};

// Footer Address
const FooterAddress = () => {
  return (
    <div className="widths mt-7 push-center">
      <div>
        <h4 className="main-green mid pb-2 font-bold">Abuja</h4>
        <p>Amino Kano Crescent, <br /> Wuse Zone 6</p>
      </div>
      <div>
        <h4 className="main-green mid py-2 font-bold">Lagos</h4>
        <p>Harmone Estate, <br /> Gbagada</p>
      </div>
      <div className="flex gap-1 pt-3">
        <BsTelephoneInbound className="main-green" />
        <p>08082957336</p>
      </div>
      <div className="flex gap-1 pt-3">
        <AiOutlineMail className="main-green mt-1" />
        <p>farmer.marketplace@gmail.com</p>
      </div>
    </div>
  );
};

// Newsletter Subscription
const NewsletterFooter = () => {
  return (
    <div className="newsletter-width">
      <h2 className="font-bold mid">Get Newsletter</h2>
      <p>We will send you updates on available products, not spam.</p>
      <div className="flex gap-1 push-top1">
        <p>Email:</p>
        <div className="footer-email-input-set">
          <input type="text" />
          <div className="adjust">
            <AiOutlineMail className="main-green" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Copyright Footer
const CopyrightFooter = () => {
  return (
    <div className="flex text-center justify-center pt-8 pb-2">
      <AiOutlineCopyright className="mt-1" />
      <small>Farmers-Marketplace 2025. All rights reserved.</small>
    </div>
  );
};

export default Footer;
