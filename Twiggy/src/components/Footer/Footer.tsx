import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_no_back}></img>
          <p>
            Indulge your taste buds with our delectable culinary creations. From
            classic comfort food to innovative fusion dishes, our menu offers a
            symphony of flavors that will tantalize your palate. Our chefs use
            only the freshest ingredients to prepare each dish with care and
            passion. Whether you're craving a hearty meal or a light snack, our
            diverse selection is sure to satisfy your cravings. Join us for an
            unforgettable dining experience that will leave you wanting more.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-224-656-565-454</li>
            <li>contact@twiggy.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © 2023 Twiggy. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
