import React from 'react';
import logo from "../assets/Casxsxpture-removebg-preview.png"
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
         <img src={logo} className='w-[140px]' alt="" />
          <p>
           Krishi-Link Inc.
            <br />
            Providing reliable tech since 2010
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
       <nav>
                 <h6 className="footer-title">Contact Info.</h6>
                 <a className="link link- text-xl"><FaFacebook></FaFacebook></a>
                 <a className="link link- text-xl"><FaLinkedin></FaLinkedin></a>
                 <a className="link link- text-xl"><FaXTwitter></FaXTwitter></a>
                 <a className="link link-">krishilink@admin.co</a>
               </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;