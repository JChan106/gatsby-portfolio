import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 15px;
  color: white;
  background-color: #3f3f3f;
  border-bottom-right-radius: 10px;

  @media (max-width: 900px) {
    border-bottom-right-radius: 0;
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
