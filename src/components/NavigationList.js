import React from "react";
import styled from "styled-components";
import NavigationListItem from "../components/NavigationListItem";
import listIcon from "../assets/images/list.svg";
import searchIcon from "../assets/images/search.svg";
import loveIcon from "../assets/images/love.svg";
import { routes } from "../routes";
import { navigationListItemTypes } from "../helpers/navigationListItemTypes";
import { breakpoints } from "../breakpoints";

const NavigationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${breakpoints.tablet} {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightTitle};
  padding-bottom: 20px;
  ${breakpoints.tablet} {
    display: none;
  }
`;

const NavigationList = () => {
  return (
    <NavigationListWrapper>
      <Title>Discover</Title>
      <NavigationListItem
        to={routes.home}
        icon={listIcon}
        text={navigationListItemTypes.home}
      />
      <NavigationListItem
        to={routes.favRecipes}
        icon={loveIcon}
        text={navigationListItemTypes.favorite}
      />
    </NavigationListWrapper>
  );
};

export default NavigationList;
