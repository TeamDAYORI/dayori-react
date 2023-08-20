import React, { useState } from "react";
import { styled } from "styled-components";
import InputTitle from "components/InputTitle";
import Button from "components/Button";

const InputContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 1.5fr 3fr;
  margin: 5% 5%;
`;

const InputTag = styled.input`
  height: 40px !important;
  width: 80%;
  font-size: 20px;
`;

const InviteContents = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

const AddButton = styled.button`
  width: 50px !important;
  height: 40px;
  margin: 2px;
`;

interface InputProps {
  title: string;
  func: any;
}

const InviteMembers = (props: InputProps) => {
  const [target, setTarget] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value);
  };

  // const [members, setMembers] = useState([]);
  const membersHandler = () => {
    props.func(target);
    setTarget("");
  };

  // const [];

  return (
    <div>
      <InputContainer>
        <InputTitle title={props.title}></InputTitle>
        <InviteContents>
          <InputTag type="text" onChange={changeHandler} value={target}></InputTag>
          <AddButton onClick={membersHandler}>추가</AddButton>
        </InviteContents>
      </InputContainer>
    </div>
  );
};

export default InviteMembers;
