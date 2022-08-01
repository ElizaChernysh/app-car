import React from "react";
import { CustomInput } from "./CustomInput";
import "./InputEmail.scss";

const InputEmail = () => {
  return (
    <div className="InputEmail">
      <div className="InputEmail__container wrapper">
        <div className="InputEmail__info">
          <h3 className="InputEmail__title">
            Haven't found a suitable vehicle?
          </h3>
          <p className="InputEmail__text">
            Sign up for our newsletter and be the first to know when we publish
            new vehicle offers.
          </p>
        </div>
        <CustomInput className="InputEmail__input"/>
      </div>
    </div>
  );
};

export default InputEmail;
