import React from "react";
import styled from "styled-components";
import { ListItem } from "../components/ListItem";
import listIcon from "../assets/images/list.svg";
import searchIcon from "../assets/images/search.svg";
import loveIcon from "../assets/images/love.svg";

const NavigationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightTitle};
  padding-bottom: 20px;
`;

export const NavigationList = () => {
  return (
    <NavigationListWrapper>
      <Title>Discover</Title>
      <ListItem to="/" icon={listIcon} text="Home" />
      <ListItem to="/browse" icon={searchIcon} text="Browse" />
      <ListItem icon={loveIcon} text="Favorite" />
    </NavigationListWrapper>
  );
};
