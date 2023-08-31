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

interface createModalProps {
  func: (value: boolean) => void;
}

const CreateModal = (props: createModalProps) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const titleHandler = (value: string) => {
    setTitle(value);
  };

  const [icon, setIcon] = useState(0);
  const iconHandler = (value: number) => {
    setIcon(value);
  };

  const [period, setPeriod] = useState(0);
  const periodHandler = (value: number) => {
    setPeriod(value);
  };

  const [password, setPassword] = useState("");
  const passwordHandler = (value: string) => {
    setPassword(value);
  };

  const [members, setMembers] = useState([]);

  const postDiary = () => {
    Axios.post(api.diary.createDiary(), {
      title: title,
      cover: icon,
      duration: period,
      password: password,
      members: members,
    }).then((res) => {
      navigate(`/diary/${res.data.data}`);
    });
  };

  return (
    <CUModal
      func={props.func}
      title="다요리 만들기"
      element={
        <>
          <Input title="Title" buttonFlag={false} placeHolder="제목을 입력해주세요" func={titleHandler}></Input>
          <SelectIcon title="Icon" origin={0} func={iconHandler}></SelectIcon>
          <Period title="Period" func={periodHandler}></Period>
          <Input
            title="Password"
            buttonFlag={false}
            placeHolder="비밀번호를 입력해주세요"
            func={passwordHandler}
          ></Input>
          <InviteMembers title="Invite" members={members} memberHandler={setMembers} diaryId={0}></InviteMembers>
          <ButtonBox>
            <AddButton onClick={postDiary}>생성</AddButton>
          </ButtonBox>
        </>
      }
    />
  );
};

export default CreateModal;
