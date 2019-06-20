import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  grid-area: header;
  height: 60px;
  z-index: 1;
`;

const LinkContainer = styled.h1`
  transition: transform .5s;
  transform: translateX(-200px);

  ${HeaderWrapper}:hover & {
    transform: translateX(75px);
  }
`;

const TitleLink = styled.a`
  color: white;
  text-decoration: none;
  line-height: 50px;
`;

const Logo = styled.a`
  text-decoration: none;
  font-size: 32px;
  position: absolute;
  padding: 10px;
  width: 60px;
  height: 60px;
  background-color: rgb(72, 175, 122);
  text-align: center;
  color: white;
  font-weight: bold;
  line-height: 35px;
  border-bottom-right-radius: 10px;
  z-index: 1;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Logo href="https://jackiechan.netlify.com/"><h1>JC</h1></Logo>
    <LinkContainer><TitleLink href="https://jackiechan.netlify.com/">{siteTitle}</TitleLink></LinkContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Jackie Chan`,
}

export default Header
