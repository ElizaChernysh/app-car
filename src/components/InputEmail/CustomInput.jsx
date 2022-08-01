import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./InputEmail.scss";
import styled from "styled-components";

export const CustomInput = () => {
  // const [isSuccess, setIsSuccess] = useState(false);

  return (
    <form>
      <div className="Input-group">
        <CustomControl
          placeholder="Enter your email"
          aria-describedby="basic-addon2"
          as={Form.Control}
          type="email"
        />
        <CustomButton
          as={Button}
          variant="outline-dark"
          // onClick={() => setIsSuccess(true)}
          // className={isSuccess && "success"}
          type="submit"
        >
          Subscribe now
        </CustomButton>
      </div>
    </form>
  );
};

const CustomControl = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  padding: 17px 16px;
  height: 54px;
  width: 505px;

  margin-right: 20px;

  &:focus {
    border: 1px solid #8d8d8d;
  }
`;

const CustomButton = styled.button`
  color: #000;
  font-size: 15px;
  line-height: 20px;

  width: 190px;
  background: #f8f8f8;
  border-radius: 15px;
  height: 54px;

  &:hover {
    color: #fff;
    border: 2px solid #f8f8f8;
    border-radius: 15px;
    background: transparent;
  }

  &:focus {
    color: #000;
    background: #f8f8f8;
  }
`;
