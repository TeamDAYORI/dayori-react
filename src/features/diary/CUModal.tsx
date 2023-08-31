import React, { useState, useRef } from "react";
import { styled } from "styled-components";

const ModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 80vh;
  font-family: "DOSGothic";
`;

const StyledTitleBar = styled.div`
  min-height: 2rem;
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
  font-family: "DOSGothic" !important;
  font-size: 1.2rem;
  color: white;
  margin: 2px 0;
`;

const HeaderButtons = styled.div`
  display: flex;
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: calc(100% - 2rem);
  margin: auto;
`;

const Container = styled.div`
  height: calc(100% - 2vh);
  overflow: auto;
  margin: 1vh 0;
`;

const ModalBack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
`;

interface ModalPropsType {
  func: (value: boolean) => void;
  title: string;
  element: JSX.Element;
}

const CUModal = (props: ModalPropsType) => {
  // close this modal
  const closeModal = () => {
    props.func(false);
  };

  // 모달 바깥부분 닫기
  const modalRef = useRef<HTMLDivElement>(null);
  // curentTarget을 지정하기 위한 useRef

  const closeAllModal = (e: any) => {
    if (modalRef.current === e.target) {
      props.func(false);
    }
  };

  return (
    <ModalBack ref={modalRef} onClick={(e) => closeAllModal(e)}>
      <ModalContainer className="window">
        <StyledTitleBar className="title-bar">
          <HeaderName className="title-bar-text">{props.title}</HeaderName>
          <HeaderButtons className="title-bar-controls">
            <button aria-label="Close" onClick={closeModal}></button>
          </HeaderButtons>
        </StyledTitleBar>

        <ModalBody className="window-body">
          <Container>{props.element}</Container>
        </ModalBody>
      </ModalContainer>
    </ModalBack>
  );
};

export default CUModal;
