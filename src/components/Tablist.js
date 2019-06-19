import React from 'react';
import styled from 'styled-components';
import Tabitem from './Tabitem';

const NavigationBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  background-color: rgba(45,45,45,0.98);
  justify-items: center;
  padding: 5px 5px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  
  @media (max-width: 900px) {
    border-radius: 0;
  }
`;

const Tablist = (props) => {
  const tabItems = props.tabs.map((tab) => {
    return (
      <Tabitem
      onTabSelect={props.onTabSelect}
      tab={tab}
      key={tab.key}
      selectedTab={props.selectedTab}
      />)
  });
  return (
    <NavigationBar>
      {tabItems}
    </NavigationBar>
  );
}

export default Tablist;
