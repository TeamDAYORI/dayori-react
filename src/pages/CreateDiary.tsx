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

const Container = styled.div`
  height: calc(100% - 6vh);
  overflow: auto;
  margin: 1vh 0;
`;

const AddButton = styled.button`
  width: 50px !important;
  height: 40px;
  margin: 2px;
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
  const membersHandler = (value: any) => {
    setMembers([...members, value]);
  };

  useEffect(() => {
    console.log(members);
  }, [members]);

  const postDiary = () => {
    axios({
      method: "POST",
      url: api.diary.createDiary(),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1bmhoeXllZTExQGdtYWlsLmNvbSIsImlhdCI6MTY5Mjc5MzAyMCwiZXhwIjoxNjkyNzk2NjIwfQ.guI0xIhnCCrsPKQ2NzUY6obF315KA0QjZi3J-0GbpH4",
      },
      data: {
        title: title,
        cover: icon,
        duration: period,
        password: password,
        members: members,
      },
    }).then((res) => {
      // console.log(res.data);
      navigate(`/diary/${res.data.data}`);
    });
  };

  return (
    <div style={{ height: "100%" }}>
      <Header title="다요리 만들기" close={true} maximize={true}></Header>
      <Container>
        <Input title="Title" buttonFlag={false} placeHolder="제목을 입력해주세요" func={titleHandler}></Input>
        <SelectIcon title="Icon" func={iconHandler}></SelectIcon>
        <Period title="Period" func={periodHandler}></Period>
        <Input title="Password" buttonFlag={false} placeHolder="비밀번호를 입력해주세요" func={passwordHandler}></Input>
        <InviteMembers title="Invite" func={membersHandler}></InviteMembers>
        <AddButton onClick={postDiary}>만들기</AddButton>
      </Container>
    </div>
  );
};

export default CreateDiary;
