import Header from "components/Header";
import Input from "components/Input";
import Period from "features/diary/Period";
import SelectIcon from "features/diary/SelectIcon";
import React, { useEffect, useState } from "react";

const CreateDiary = () => {
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

  useEffect(() => {
    console.log(period);
  }, [period]);
  return (
    <div>
      <Header title="다요리 만들기" close={true} maximize={true}></Header>
      <Input title="Title" buttonFlag={false} placeHolder="제목을 입력해주세요" func={titleHandler}></Input>
      <SelectIcon title="Icon" func={iconHandler}></SelectIcon>
      <Period title="Period" func={periodHandler}></Period>
      <Input title="Password" buttonFlag={false} placeHolder="비밀번호를 입력해주세요" func={passwordHandler}></Input>
    </div>
  );
};

export default CreateDiary;
