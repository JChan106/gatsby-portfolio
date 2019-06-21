import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 15px;
  color: white;
  background-color: #3d3d3d;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 900px) {
    border-radius: 0;
  }

`;

const Tabdetail = (props) => {
  return (
    <Container>
      {props.tab.detail}
    </Container>
  );
}

export default Tabdetail;
