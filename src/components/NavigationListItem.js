import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../breakpoints";

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 0;
  ${breakpoints.tablet} {
    padding: 0;
    margin-left: 15px;
  }
`;
// const IconWrapper = styled.div`
//   padding-right: 20px;
//   ${breakpoints.tablet} {
//     padding-right: 5px;
//   }
//   img {
//     width: 25px;
//     height: 25px;
//   }
// `;

const LinkText = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    font-size: 0;
  }
`;

const IconWrapper = styled.div`
  padding-right: 20px;
  ${breakpoints.tablet} {
    padding-right: 5px;
  }
  img {
    width: 25px;
    height: 25px;
  }
`;

const NavigationListItem = ({ to, icon, text }) => {
  return (
    <Wrapper>
      {/* <IconWrapper>
        <img src={icon} alt={text} />
      </IconWrapper> */}
      <LinkText to={to}>
        <IconWrapper>
          <img src={icon} alt={text} />
        </IconWrapper>

        {text}
      </LinkText>
    </Wrapper>
  );
};

export default NavigationListItem;
