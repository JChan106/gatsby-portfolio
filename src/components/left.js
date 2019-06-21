import React from "react";
import styled, {keyframes} from "styled-components";

import Image from "./image";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  z-index: 1;
  background-color: rgba(45,45,45,0.98);
  padding: 20px;
  border-top-left-radius: 100%;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  grid-area: left;
  height: 100%;
  animation: ${fadeIn} .3s linear;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 3px 3px 10px 2px rgba(35,35,35,.5);

  @media (max-width: 900px) {
    border-radius: 0;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  white-space: nowrap;
  align-self: center;
  transition: .3s;

  :hover {
    cursor: pointer;
    color: grey;
  }
`;

const Left = () => {

  return (
    <Container>
      <Image/>
      <ExternalLink href="/resume.pdf">Resume</ExternalLink>
      <ExternalLink target="_blank" href="mailto:jackisivchan@gmail.com">Email</ExternalLink>
      <ExternalLink target="_blank" href="https://www.linkedin.com/in/jackiesivchan/">LinkedIn</ExternalLink>
      <ExternalLink target="_blank" href="https://github.com/JChan106">Github</ExternalLink>
    </Container>
  );
}

export default Left
