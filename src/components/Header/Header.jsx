import React from "react";
import logo from "../../image/header/logo-company.svg";
import "./Header.scss";
import facebook from "../../image/header/facebook.svg";
import instagram from "../../image/header/instagram.svg";
import { Button } from 'react-bootstrap';
import { ButtonComponent } from "./Button";

export const Header = () => {

  return (
    <header className="header">
      <div className="wrapper">
        <section className="header__navigation">
          <a href="/" className="header__logo logo">
            <img src={logo} alt="Logo of Monza Motorsports" />
          </a>

          <div className="header__wrapper-links">
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">Inventory</li>
                <li className="header__item">Financing </li>
                <li className="header__item">Contacts</li>
              </ul>
            </nav>

            <a href="/" className="header__networks">
              <img src={facebook} alt="Go to the Facebook link" />
            </a>

            <a href="/" className="header__networks">
              <img src={instagram} alt="Go to the Instagram link" />
            </a>
          </div>
        </section>

        <section className="header__info">
          <h1 className="header__title">The right way to get a car</h1>

          <div className="header__description">
            <p className="header__text">
              Monza Motorsports is a boutique-style dealership specializing in
              premium imports. We offer an advanced online vehicle purchasing
              experience with integrated financing and contactless home
              delivery.
            </p>
            <p className="header__text">
              All of our cars come with a 5 day/500 kilometres no-hassle
              exchange option. Since 2012 Monza Motorsports has been the
              benchmark for innovation in the automotive industry.
            </p>
          </div>

          <ButtonComponent />
        </section>
      </div>
    </header>
  );
};
