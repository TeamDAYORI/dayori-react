import React from "react";
import { styled } from "styled-components";

const Button = styled.button`
  font-family: "DOSGothic";
  height: 40px;
  width: 100%;
  margin: 0 10%;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  labelprops: string;
}

// 사용법:
// <SubmitButton labelProps="버튼라벨" onClick={() => console.log("Button clicked")}></SubmitButton>
const SubmitButton = (props: ButtonProps) => {
  return (
    <div>
      <Button {...props}>{props.labelprops}</Button>
    </div>
  );
};

export default SubmitButton;
