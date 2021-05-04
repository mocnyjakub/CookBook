import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 0;
`;
const IconWrapper = styled.div`
  padding-right: 20px;
  img {
    width: 25px;
    height: 25px;
  }
`;

const LinkText = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 500;
`;

const NavigationListItem = ({ to, icon, text }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <img src={icon} alt={text} />
      </IconWrapper>
      <LinkText to={to}>{text}</LinkText>
    </Wrapper>
  );
};

export default NavigationListItem;