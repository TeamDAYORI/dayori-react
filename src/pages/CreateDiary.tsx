import api from "api/api";
import axios from "axios";
import Header from "components/Header";
import Input from "components/Input";
import InviteMembers from "features/diary/InviteMembers";
import Period from "features/diary/Period";
import SelectIcon from "features/diary/SelectIcon";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { selectAccessToken } from "slices/authSlice";

const Container = styled.div`
  height: calc(100% - 6vh);
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

const CreateDiary = () => {
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
    axios({
      method: "POST",
      url: api.diary.createDiary(),
      headers: {
        Authorization: `Bearer ${selectAccessToken}`,
      },
      data: {
        title: title,
        cover: icon,
        duration: period,
        password: password,
        members: members,
      },
    }).then((res) => {
      navigate(`/diary/${res.data.data}`);
    });
  };

  return (
    <div style={{ height: "100%" }}>
      <Header title="다요리 만들기" close={true} maximize={true}></Header>
      <Container>
        <Input
          type="text"
          title="Title"
          buttonFlag={false}
          placeHolder="제목을 입력해주세요"
          func={titleHandler}
        ></Input>
        <SelectIcon title="Icon" origin={0} func={iconHandler}></SelectIcon>
        <Period title="Period" func={periodHandler}></Period>
        <Input
          type="password"
          title="Password"
          buttonFlag={false}
          placeHolder="비밀번호를 입력해주세요"
          func={passwordHandler}
        ></Input>
        <InviteMembers title="Invite" members={members} memberHandler={setMembers} diaryId={0}></InviteMembers>
        <ButtonBox>
          <AddButton onClick={postDiary}>생성</AddButton>
        </ButtonBox>
      </Container>
    </div>
  );
};

export default CreateDiary;
