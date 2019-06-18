import React, { useState } from "react";
import styled, {keyframes} from "styled-components";

import Tablist from "./Tablist";
import Tabdetail from "./Tabdetail";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  grid-area: right;
  max-height: 100%;
  max-width: 100%;
  animation: ${fadeIn} .5s linear;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 900px) {
  }
`;

const Right = (props) => {
  const [selectedTab, setSelectedTab] = useState(props.data[0]);

  return (
    <Container>
      {<Tablist
        tabs={props.data}
        onTabSelect={(selectedTab) => setSelectedTab(selectedTab)}
        selectedTab={selectedTab}
      />}
      {<Tabdetail tab={selectedTab}/>}
    </Container>
  );
}

export default Right
