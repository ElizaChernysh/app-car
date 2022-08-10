import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./InputEmail.scss";
import styled from "styled-components";

export const CustomInput = () => {
  const [isError, setIsError] = useState(false);

  // useEffect(() => {

  // }, [errors?.email])

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    reset();
  };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <div className="Form__group">
        <input
          placeholder="Enter your email"
          className="Form__input"
          // className={errors?.email ? "Form__input Form__input-error" : "Form__input"}
          type="text"
          {...register("email", {
            required: "Enter email",
            pattern: {
              value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/,
              message: "Incorrect email",
            },
          })}
        />
        {errors?.email && (
            <span className="Form__error">{errors?.email.message}</span>
        )}
      </div>
      <CustomButton as={Button} variant="outline-dark" type="submit">
        Subscribe now
      </CustomButton>
    </form>
  );
};

// const CustomControl = styled.input`
//   border: 1px solid #bdbdbd;
//   border-radius: 15px;
//   padding: 17px 16px;
//   height: 54px;
//   width: 505px;

//   margin-right: 20px;

//   &:focus {
//     border: 1px solid #8d8d8d;
//   }
// `;

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
