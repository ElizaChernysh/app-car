import { Form } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

export const SelectComponent = () => {
  return (
    <CustomSelect as={Form.Select} variant="outline-secondary" type="submit">
    </CustomSelect>
  );
};

const CustomSelect = styled.button`
  color: #f8f8f8;
  border-radius: 15px;
  border: 2px solid #F8F8F8;
  padding: 16px 90px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  &:hover {
    color: #000;
    border-color: none;
    background-color: white;
  }

  &:focus {
    color: #f8f8f8;
    border-color: #f8f8f8;
    background-color: transparent;
    box-shadow: none;
  }
`;
