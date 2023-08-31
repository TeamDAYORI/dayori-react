import React, { useState } from "react";
import { styled } from "styled-components";
import api from "api/api";
import Input from "components/Input";
import InviteMembers from "features/diary/InviteMembers";
import Period from "features/diary/Period";
import SelectIcon from "features/diary/SelectIcon";
import { useNavigate } from "react-router-dom";
import CUModal from "./CUModal";
import Axios from "api/JsonAxios";

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
    Axios.put(api.diary.setDiary(diaryId), {
      title: title,
      cover: icon,
      period: period,
      password: password,
      additionalMembers: members,
    }).then((res) => {
      navigate(`/diary/${res.data.data}`);
    });
  };

  return (
    <CUModal
      func={props.func}
      title="다요리 수정"
      element={
        <>
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
          <InviteMembers title="Invite" members={members} memberHandler={setMembers} diaryId={diaryId}></InviteMembers>
          <ButtonBox>
            <AddButton onClick={postDiary}>생성</AddButton>
          </ButtonBox>
        </>
      }
    />
  );
};

export default SetDiaryModal;
