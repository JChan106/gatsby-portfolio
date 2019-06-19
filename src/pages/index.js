import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Left from "../components/left";
import Right from "../components/right";
import Data from "../components/data";

const Container = styled.div`
  height: 100vh;
  background-color: #474747;
  display: grid;
  transition: grid-area 0.5s ease;
  column-gap: 50px;
  font-weight: 100;
  grid-template:
    [row1-start] "header header header header" 1fr [row1-end]
    [row2-start] ". left right ." 500px [row2-end]
    [row3-start] ". . . ." 1fr [row3-end]
    / 1fr 250px 500px 1fr;

  @media (max-width: 900px) {
    grid-template:
    [row1-start] "header" auto [row1-end]
    [row2-start] "left" auto [row2-end]
    [row3-start] "right" 1fr [row3-end]
    / 100%;
    row-gap: 10px;
    column-gap: 0;
  }
`;

const Background = styled(Particles)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

const IndexPage = () => {
  const particlesOptions = {
    "particles": {
      "number": {
          "value": 200,
          "density": {
              "enable": false
          }
      },
      "opacity": {
        "value": .1
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 1,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "none",
          "out_mode": "out"
      }
    }
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        {/* <Header siteTitle="Jackie Chan"/> */}
        <Left/>
        <Right data={Data}/>
        {/* <Background params={particlesOptions} /> */}
      </Container>
    </Layout>
  );
}

export default IndexPage
