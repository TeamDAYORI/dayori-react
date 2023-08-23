import React, { useState } from "react";
import "98.css";
import { styled } from "styled-components";
import axios from "axios";
import api from "api/api";

const ModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 40%;
  font-family: "DOSGothic";
`;

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
  height: calc(100% - 4vh);
  margin: auto;
`;

const BodyContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  margin: 8px;
`;
const BodyTxt = styled.p`
  font-size: 1.2rem;
  margin: 0 0.5rem;
`;
const DiaryImg = styled.img`
  margin: 0;
  width: 2.4rem;
`;
const YN = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  margin: 1.2rem;
`;
const PWInput = styled.input`
  height: 1.5rem;
  font-size: 1.2rem;
  width: 80%;
`;
const ButtonStyle = styled.button`
  font-family: "DOSGothic";
  height: 40px;
  width: 25%;
  margin: 0 10%;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
`;

interface modalOpen {
  func: any;
  seq: number;
  title: string;
  icon: number;
}

const InvitationModal = (props: modalOpen) => {
  // close this modal
  const closeModal = () => {
    props.func(false);
  };

  // Accept Invitation
  const [yesContent, setYesContent] = useState(false);
  const clickYes = () => {
    setYesContent(true);
  };
  const [password, setPassword] = useState("");
  const pwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const [warning, setWarning] = useState(false);
  const acceptInvitation = () => {
    axios({
      method: "POST",
      url: api.diary.acceptInvitation(props.seq),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1bmhoeXllZTExQGdtYWlsLmNvbSIsImlhdCI6MTY5Mjc4NjM4MiwiZXhwIjoxNjkxMDgzNDE1fQ.pEb023hc6pmadUjcORKg-gV2FeNU5JTLM_iX7Wqu2lw",
      },
      data: {
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);
        closeModal();
      })
      .catch((error) => {
        if (error.response.status == 400) {
          setWarning(true);
        }
      });
  };

  // Refusal of Invitation
  const refuseInvitation = () => {
    axios({
      method: "POST",
      url: api.diary.refuseInvitation(props.seq),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1bmhoeXllZTExQGdtYWlsLmNvbSIsImlhdCI6MTY5Mjc4NjM4MiwiZXhwIjoxNjkxMDgzNDE1fQ.pEb023hc6pmadUjcORKg-gV2FeNU5JTLM_iX7Wqu2lw",
      },
    }).then((res) => {
      console.log(res.data);
      closeModal();
    });
  };

  return (
    <ModalContainer className="window">
      <StyledTitleBar className="title-bar">
        <HeaderName className="title-bar-text">초대장</HeaderName>
        <HeaderButtons className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onClick={closeModal}></button>
        </HeaderButtons>
      </StyledTitleBar>
      <ModalBody className="window-body">
        {!yesContent ? (
          <div style={{ margin: "auto" }}>
            <BodyContent>
              <DiaryImg src={require(`assets/coverIcons/img (${props.icon}).svg`)} />
              <BodyTxt>[{props.title}]에</BodyTxt>
            </BodyContent>
            <BodyContent>
              <BodyTxt>참여하시겠습니까?</BodyTxt>
            </BodyContent>
            <YN>
              <BodyTxt style={{ color: "blue" }} onClick={clickYes}>
                예
              </BodyTxt>
              <BodyTxt style={{ color: "red" }} onClick={refuseInvitation}>
                아니오
              </BodyTxt>
            </YN>
          </div>
        ) : (
          <div style={{ margin: "auto" }}>
            <BodyContent>
              <DiaryImg src={require(`assets/coverIcons/img (${props.icon}).svg`)} />
              <BodyTxt>[{props.title}]의</BodyTxt>
            </BodyContent>
            <BodyContent>
              <BodyTxt>비밀번호를 입력하세요.</BodyTxt>
            </BodyContent>
            <PWInput type="text" onChange={pwHandler} value={password} />
            {warning && <p>비밀번호가 다릅니다. 다시 입력해주세요.</p>}
            <ButtonStyle onClick={acceptInvitation}>확인</ButtonStyle>
          </div>
        )}
      </ModalBody>
    </ModalContainer>
  );
};

export default InvitationModal;
