import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const InputTag = styled.input`
  height: 40px !important;
  width: 100%;
  font-size: 20px;
  font-family: "DOSGothic";
`;

const InputBox = (props: any) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.change(e.target.value);
  };
  return (
    <Container>
      <InputTag type="text" onChange={changeHandler} placeholder={props.placeHolder} />
    </Container>
  );
};

export default InputBox;
