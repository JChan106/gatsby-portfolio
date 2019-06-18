import React from 'react';
import styled from "styled-components";

const Tab = styled.a`
  color: white;
  transition: .3s;
  color: ${props => props.selectedTab ? "grey" : "white"};
  
  :hover {
    cursor: pointer;
    color: grey;
  }
`;

const Tabitem = (props) => {
  return (
    <Tab 
      selectedTab={props.selectedTab === props.tab}
      onClick={() => props.onTabSelect(props.tab)}>
      {props.tab.title}
      {/* <div className={props.selectedTab === props.tab ? 'sline' : 'line'}></div> */}
    </Tab>
  );
}

export default Tabitem;
