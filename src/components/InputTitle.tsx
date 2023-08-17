import React from "react";
import { styled } from "styled-components";

const InputTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const InputTitleSpan = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 2px 0;
`;

interface Props {
  title: string;
}

const InputTitle = ({ title }: Props) => {
  return (
    <InputTitleBox>
      <InputTitleSpan>{title}</InputTitleSpan>
    </InputTitleBox>
  );
};

export default InputTitle;
