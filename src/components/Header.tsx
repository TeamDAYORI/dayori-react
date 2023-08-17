import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledTitleBar = styled.div`
  min-height: 4vh;
  padding: 0 10px 0 10px;
  background: #ff6e7f; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8bd8f0, #f08bec); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    45deg,
    #8bd8f0,
    #f08bec
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const HeaderName = styled.div`
  font-size: 2.5vh;
  color: white;
`;

const HeaderButtons = styled.div`
  display: flex;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: center;
  /* height: 3vh;
  width: 3vh; */
  padding: 0;
  margin: 2px;
  font-size: 2.5vh;
`;

interface HeaderType {
  title: string;
  close?: boolean;
  minimize?: boolean;
  maximize?: boolean;
}

const Header = (props: HeaderType) => {
  const navigate = useNavigate();
  const onClickClose = () => {
    navigate(-1);
  };
  return (
    <StyledTitleBar className="title-bar">
      <HeaderName>{props.title}</HeaderName>
      <HeaderButtons className="title-bar-controls">
        {props.minimize ? <ControlButton aria-label="Minimize"></ControlButton> : <></>}
        {props.maximize ? <ControlButton aria-label="Maximize"></ControlButton> : <></>}
        {props.close ? <ControlButton onClick={onClickClose} aria-label="Close"></ControlButton> : <></>}
      </HeaderButtons>
    </StyledTitleBar>
  );
};

export default Header;
