import InputTitle from "components/InputTitle";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const InputContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 1.5fr 3fr;
  margin: 5% 5%;
`;

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 200px;
`;

const IconLefts = styled.div``;
const SelectedIcon = styled.img`
  margin: 2vh auto;
  width: 30%;
  height: auto;
`;

const IconBox = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 2vh auto;
  width: 80%;
  height: auto;
`;

interface InputProps {
  title: string;
  func: any;
}

const SelectIcon = (props: InputProps) => {
  const imgList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  ];
  const [selectedIcon, setSelectedIcon] = useState(0);

  useEffect(() => {
    props.func(selectedIcon);
  }, [selectedIcon]);
  return (
    <div>
      <InputContainer>
        <IconLefts>
          <InputTitle title={props.title}></InputTitle>
          {selectedIcon == 0 ? (
            <></>
          ) : (
            <SelectedIcon src={require(`assets/coverIcons/img (${selectedIcon}).svg`)} alt={`img ${selectedIcon}`} />
          )}
        </IconLefts>
        <IconContainer className="sunken-panel">
          {imgList.map((item, index) => (
            <div key={index} onClick={() => setSelectedIcon(item)}>
              <IconBox src={require(`assets/coverIcons/img (${item}).svg`)} alt={`img ${item}`} />
            </div>
          ))}
        </IconContainer>
      </InputContainer>
    </div>
  );
};

export default SelectIcon;
