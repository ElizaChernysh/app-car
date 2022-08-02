import React from "react";
import logo from "../../image/header/logo-company.svg";
import facebook from "../../image/header/facebook.svg";
import instagram from "../../image/header/instagram.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="wrapper">
        <section className="Footer__navigation">
          <a href="/" className="Footer__logo logo">
            <img src={logo} alt="Logo of Monza Motorsports" />
          </a>

          {/* <div className="Footer__wrapper-links"> */}
          <nav className="Footer__nav">
            <ul className="Footer__list">
              <li className="Footer__item">Inventory</li>
              <li className="Footer__item">Financing </li>
              <li className="Footer__item">Contacts</li>
            </ul>
          </nav>

          <div className="Footer__networks-wrapper">
            <a href="/" className="Footer__networks">
              <img src={facebook} alt="Go to the Facebook link" />
            </a>

            <a href="/" className="Footer__networks">
              <img src={instagram} alt="Go to the Instagram link" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
