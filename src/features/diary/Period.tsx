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
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
          <InputBox type="number" onChange={onChangePeriod} min={1} />
          <span style={{ fontSize: "25px", margin: "4px" }}>Days</span>
        </InputContainer>
      </PeriodContainer>
    </div>
  );
};

export default Period;
