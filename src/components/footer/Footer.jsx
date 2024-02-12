import React from "react";
import Logo from "../../assets/logo.png";
import { FaInstagram, FaShopify, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div
    data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out'
    className="flex flex-col items-center  h-[50vh] gradiant px-16 justify-between py-12 m-auto">
      <div className="flex items-center justify-center gap-4   py-2 px-4">
        <img src={Logo} alt="" />
        <h1 className="text-2xl font-bold">SHOPPER</h1>
      </div>
      <div className="flex items-center justify-between gap-4 lg:gap-16 lg:w-[80%] lg:justify-center    ">
        <div className="lg:text-3xl font-thin">Company</div>
        <div className="lg:text-3xl font-thin">Prodcts</div>
        <div className="lg:text-3xl font-thin">Offices</div>
        <div className="lg:text-3xl font-thin">About</div>
        <div className="lg:text-3xl font-thin">Contract</div>
      </div>
      <div className=" flex items-center justify-center gap-4">
        <FaInstagram size={25} />
        <FaShopify size={25} />
        <FaWhatsapp size={25} />
      </div>
      <hr className="h-1 gradiant w-full " />
      <p>Copyright @ 2024 - All Right Reserved</p>
    </div>
  );
};

export default Footer;
