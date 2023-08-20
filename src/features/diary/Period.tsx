import InputTitle from "components/InputTitle";
import React, { useState } from "react";
import { styled } from "styled-components";

const PeriodContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 1.5fr 3fr;
  margin: 5% 5%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputBox = styled.input`
  height: 40px !important;
  width: 40%;
  font-size: 20px;
`;

interface InputProps {
  title: string;
  func: any;
}

const Period = (props: InputProps) => {
  const onChangePeriod = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.func(e.target.value);
  };
  return (
    <div>
      <PeriodContainer>
        <InputTitle title={props.title}></InputTitle>
        <InputContainer>
          <InputBox type="number" onChange={onChangePeriod} />
          <span style={{ fontSize: "25px", margin: "4px" }}>Days</span>
        </InputContainer>
      </PeriodContainer>
    </div>
  );
};

export default Period;
