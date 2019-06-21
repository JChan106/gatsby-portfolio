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
  animation: ${fadeIn} .3s linear;
  display: flex;
  flex-direction: column;
  z-index: 1;
  box-shadow: 3px 3px 10px 2px rgba(35,35,35,.5);
  border-radius: 10px;
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
