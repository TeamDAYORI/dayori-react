import React from "react";
import { styled } from "styled-components";

const ButtonStyle = styled.button`
  font-family: "DOSGothic";
  height: 40px;
  width: 25%;
  margin: 0 10%;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
`;

interface ButtonType {
  content: string;
}

const Button = (props: ButtonType) => {
  return <ButtonStyle>{props.content}</ButtonStyle>;
};

export default Button;
