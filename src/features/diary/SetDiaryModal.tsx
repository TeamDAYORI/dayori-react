import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import axios from "axios";
import api from "api/api";
import Input from "components/Input";
import InviteMembers from "features/diary/InviteMembers";
import Period from "features/diary/Period";
import SelectIcon from "features/diary/SelectIcon";
import { useNavigate } from "react-router-dom";
import { selectAccessToken } from "slices/authSlice";

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

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
const AddButton = styled.button`
  width: 8rem !important;
  height: 40px;
  margin: 0 2rem 2rem;
`;

const ModalBack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
`;

// 부모노드에
// const settingModalHandler = (value: boolean) => {
//   setSettingModal(value);
// };
// <SettingModal func={settingModalHandler}></SettingModal>
interface settingModalProps {
  func: (value: boolean) => void;
}

const SetDiaryModal = (props: settingModalProps) => {
  const navigate = useNavigate();
  // close this modal
  const closeModal = () => {
    props.func(false);
  };

  const diaryId = 1;

  const [title, setTitle] = useState("원래 제목");
  const titleHandler = (value: string) => {
    setTitle(value);
  };

  const [icon, setIcon] = useState(1);
  const iconHandler = (value: number) => {
    setIcon(value);
  };

  const [period, setPeriod] = useState(1);
  const periodHandler = (value: number) => {
    setPeriod(value);
  };

  const [password, setPassword] = useState("originpw");
  const passwordHandler = (value: string) => {
    setPassword(value);
  };

  const [members, setMembers] = useState([]);

  const postDiary = () => {
    axios({
      method: "PUT",
      url: api.diary.setDiary(diaryId),
      headers: {
        Authorization: `Bearer ${selectAccessToken}`,
      },
      data: {
        title: title,
        cover: icon,
        period: period,
        password: password,
        additionalMembers: members,
      },
    }).then((res) => {
      navigate(`/diary/${res.data.data}`);
    });
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
          <HeaderName className="title-bar-text">다요리 수정</HeaderName>
          <HeaderButtons className="title-bar-controls">
            {/* <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button> */}
            <button aria-label="Close" onClick={closeModal}></button>
          </HeaderButtons>
        </StyledTitleBar>
        <ModalBody className="window-body">
          <Container>
            <Input
              title="Title"
              value={title}
              buttonFlag={false}
              placeHolder="제목을 입력해주세요"
              func={titleHandler}
            ></Input>
            <SelectIcon title="Icon" origin={icon} func={iconHandler}></SelectIcon>
            <Period title="Period" value={period} func={periodHandler}></Period>
            <Input
              title="Password"
              buttonFlag={false}
              value={password}
              placeHolder="비밀번호를 입력해주세요"
              func={passwordHandler}
            ></Input>
            <InviteMembers
              title="Invite"
              members={members}
              memberHandler={setMembers}
              diaryId={diaryId}
            ></InviteMembers>
            <ButtonBox>
              <AddButton onClick={postDiary}>생성</AddButton>
            </ButtonBox>
          </Container>
        </ModalBody>
      </ModalContainer>
    </ModalBack>
  );
};

export default SetDiaryModal;
