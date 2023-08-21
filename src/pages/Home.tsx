import React from "react";
import { styled } from "styled-components";

const HomeWhole = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledTitleBar = styled.div`
  position: relative;
  min-height: 4vh;
  padding: 0 10px 0 10px;
  background: #ff6e7f; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8bd8f0, #f08bec); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    45deg,
    #8bd8f0,
    #f08bec
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const HomeTitle = styled.p`
  position: absolute;
  padding: 0;
  margin: 0;
  bottom: 0;
  left: 1vh;
  font-size: 8vh;
`;

const HomeContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: calc(100% - 4vh);
`;

const HomeContentsGrid = styled.div`
  display: grid;
  margin: 4vh;
  grid-template-columns: repeat(4, 1fr);
`;

const HomeContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 2vh auto;
  width: 100%;
  height: auto;
`;

const AddDiaryButton = styled.button`
  height: 6vh;
  width: 10vh;
  padding: 0;
  margin: auto;
  font-size: 2vh;
`;

const DiaryImg = styled.img<{ myTurn: boolean }>`
  margin: auto;
  width: 10vh;
  opacity: ${(props) => (props.myTurn ? 1 : 0.5)};
`;

const Home = () => {
  const username = "kiki";
  // const diaryList = [1,2,3,4,5];
  return (
    <HomeWhole>
      <StyledTitleBar className="title-bar">
        <HomeTitle>{username} `s 다요리 </HomeTitle>
      </StyledTitleBar>
      <HomeContainer>
        <HomeContentsGrid>
          <HomeContent>
            <AddDiaryButton>추가</AddDiaryButton>
          </HomeContent>
          {/* {diaryList.map((item, index) => (
            <HomeContent key={index}>
              <DiaryImg src={item} alt="" myTurn={true} />
            </HomeContent>
          ))} */}
        </HomeContentsGrid>
      </HomeContainer>
    </HomeWhole>
  );
};

export default Home;
