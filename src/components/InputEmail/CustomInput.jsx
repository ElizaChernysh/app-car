import { Form, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import "./InputEmail.scss";
import styled from "styled-components";

export const CustomInput = () => {
  const {
    register,
    formState: { errors, isValid},
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Input-group">
        <CustomControl
          placeholder="Enter your email"
          // aria-describedby="basic-addon2"
          as={Form.Control}
          // type="email"
          {...register('email', {
            required: "Enter email",
            pattern: {
             value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/,
             message: "Incorrect email"
            } 

          })}
          className={errors?.email ? 'Input__error' : ''}
        />
        {errors?.email && 
        <p style={{color: 'red'}}>{errors?.errorsmail?.message}</p>
        }
        <CustomButton
          as={Button}
          variant="outline-dark"
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
