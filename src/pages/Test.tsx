import React, { useState, useEffect } from "react";
import "98.css";
import Input from "components/Input";
import Button from "./../components/Button";
import Header from "components/Header";

export interface testProps {
  func: any;
}

const Test = () => {
  const [test, setTest] = useState("");
  const testHandler = (value: any) => {
    setTest(value);
  };

  const testButton = (contents: string) => {
    console.log(test);
  };

  return (
    <div>
      <Header title="제목" />
      <div>test</div>
      <Input
        title="TITLE"
        buttonLabelProps="버튼 확인"
        clickFunc={testButton}
        func={testHandler}
        buttonFlag={false}
        placeHolder="titletitle"
      ></Input>

      <Button content="취소"></Button>
    </div>
  );
};

export default Test;
