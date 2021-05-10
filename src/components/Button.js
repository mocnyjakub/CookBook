import React from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../breakpoints";

const StyledButton = styled.button`
  border: none;
  outline: none;
  font-family: "Open Sans";
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  z-index: 2;
  ${({ submitBtn }) =>
    !submitBtn &&
    `${breakpoints.tablet} {
    width: 25%;
    height: 25%;
  }`}

  &::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: "";
    width: 50%;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover {
    &::before {
      background: black;
      width: 100%;
    }
  }

  ${({ submitBtn }) =>
    submitBtn &&
    css`
      border: none;
      outline: none;
      border-radius: 0 25px 25px 0;
      cursor: pointer;
      text-transform: uppercase;
      background-color: #c1c1c1;
      color: #111;
      width: 30%;
      height: 100%;
      font-weight: 700;
      position: absolute;
      top: 0;
      right: 0;
    `}
`;

const ButtonText = styled.span`
  color: white;
  mix-blend-mode: difference;
`;

const Button = ({ children, onClickFn, submitBtn }) => {
  return (
    <StyledButton onClick={onClickFn} submitBtn={submitBtn}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
