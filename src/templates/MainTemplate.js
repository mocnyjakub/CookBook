import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { breakpoints } from "../breakpoints";
import Navigation from "../components/Navigation";
import { GlobalStyle } from "../styles/GlobalStyle";
import { mainTheme } from "../styles/theme";

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  ${breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Layout>
          <Navigation />
          {children}
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
