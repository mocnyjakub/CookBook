import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoWrapper = styled.div`
  padding-bottom: 50px;
`;

const LogoLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  text-decoration: none;
  font-size: 2rem;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoLink to="/">Cookz</LogoLink>
    </LogoWrapper>
  );
};

export default Logo;
