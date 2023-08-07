import React from "react";
import { styled } from "styled-components";

const StyledTitleBar = styled.div`
  min-height: 3vh;
  padding: 0 10px 0 10px;
  background: #ff6e7f; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8bd8f0, #f08bec); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    45deg,
    #8bd8f0,
    #f08bec
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Header = () => {
  return (
    <StyledTitleBar className="title-bar">
      <div className="title-bar-text">DAYORI</div>
      <div className="title-bar-controls">
        <button aria-label="Close" />
      </div>
    </StyledTitleBar>
  );
};

export default Header;
