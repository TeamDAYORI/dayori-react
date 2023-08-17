import React from "react";
import { styled } from "styled-components";
import SubmitButton from "./SubmitButton";
import InputTitle from "./InputTitle";
import InputBox from "./InputBox";
import { testProps } from "pages/Test";

const InputContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.5fr 3fr;
  margin: 40px 5%;
`;

const InputContent = styled.div<{ flag: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.flag ? "2fr 1fr" : "1fr")};
`;

interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonFlag?: boolean;
  title: string;
  buttonLabelProps?: string;
  clickFunc?: any;
  func: any;
  placeHolder?: string;
}

const Input = (props: InputProps & testProps) => {
  const onChangeValue = (value: any) => {
    props.func(value);
  };
  return (
    <InputContainer>
      <InputTitle title={props.title}></InputTitle>
      <InputContent flag={props.buttonFlag}>
        <InputBox change={onChangeValue} buttonFlag={props.buttonFlag} placeHolder={props.placeHolder}></InputBox>
        {props.buttonFlag == true ? (
          <SubmitButton labelprops={props.buttonLabelProps} onClick={props.clickFunc}></SubmitButton>
        ) : (
          <></>
        )}
      </InputContent>
    </InputContainer>
  );
};

export default Input;
