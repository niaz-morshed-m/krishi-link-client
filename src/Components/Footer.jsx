import React from 'react';
import logo from "../assets/Casxsxpture-removebg-preview.png"
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 flex justify-around">
        <aside>
          <img src={logo} className="w-[140px]" alt="" />
          <p>
            Krishi-Link Inc.
            <br />
            Providing reliable tech since 2010
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Contact Info.</h6>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="link link- text-xl"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="link link- text-xl"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="link link- text-xl"
          >
            <FaXTwitter></FaXTwitter>
          </a>
          <a
            href="mailto:krishilink@admin.co"
            target="_blank"
            className="link link-"
          >
            krishilink@admin.co
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/terms-of-use" className="link link-hover">
            Terms of use
          </Link>

          <Link to="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer>
    );
};

export default Footer;