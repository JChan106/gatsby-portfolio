import PropTypes from "prop-types";
import React from "react";
import styled, {keyframes} from "styled-components";

const slide = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const HeaderWrapper = styled.header`
  grid-area: header;
  height: 60px;
  z-index: 1;
`;

const Logo = styled.a`
  text-decoration: none;
  font-size: 32px;
  position: absolute;
  padding: 10px;
  /* height: 60px; */
  background-color: rgb(72, 175, 122);
  letter-spacing: -1px;
  text-align: center;
  color: white;
  font-weight: bold;
  line-height: 30px;
  border-bottom-right-radius: 10px;
  z-index: 1;
  animation: ${slide} .5s ease-out 1s;
  transform: translate(-100%);
  animation-fill-mode: forwards;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Logo href="https://jackiechan.netlify.com/">{siteTitle}</Logo>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Jackie Chan`,
}

export default Header
