import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import NavigationList from "../components/NavigationList";
import background from "../assets/images/Group 2.png";
import { breakpoints } from "../breakpoints";

const NavigationWrapper = styled.div`
  grid-column: 1/2;
  display: flex;
  width: 100%;
  padding: 30px 0 0 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-x: hidden;

  ${breakpoints.tablet} {
    /* transform: translateX(-100%); */
    position: fixed;
    z-index: 3;
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  /* &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 200px;
    bottom: 0;
    left: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: rotate(180deg);
  } */
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Logo />
      <NavigationList />
    </NavigationWrapper>
  );
};
export default Navigation;
