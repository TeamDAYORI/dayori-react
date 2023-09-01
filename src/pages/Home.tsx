import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import api from "api/api";
import { useNavigate } from "react-router-dom";
import InvitationModal from "features/diary/InvitationModal";
import CreateModal from "features/diary/CreateModal";
import Axios from "api/JsonAxios";

const HomeWhole = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "DOSGothic";
`;

const BackGroundModal = styled.div<{ modal: string }>`
  opacity: ${(props) => (props.modal == "true" ? "0.5" : "1")};
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
  overflow: visible;
  font-family: "DOSGothic";
`;

const HomeContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: calc(100% - 4vh);
  overflow: auto;
  font-family: "DOSGothic";
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
  font-family: "DOSGothic";
`;

const ImgBox = styled.div`
  position: relative;
`;

const DiaryImg = styled.img<{ myturn: boolean; joined: boolean }>`
  margin: auto;
  width: 10vh;
  opacity: ${(props) => (props.myturn ? 1 : 0.5)};
  background-color: ${(props) => (props.joined ? 0 : "rgba(255, 251, 0, 0.35)")};
  box-shadow: ${(props) =>
    props.joined
      ? "0"
      : "rgba(255, 251, 0, 0.35) 0px 54px 55px, rgba(255, 251, 0, 0.35) 0px -12px 30px, rgba(255, 251, 0, 0.35) 0px 4px 6px, rgba(255, 251, 0, 0.35) 0px 12px 13px, rgba(255, 251, 0, 0.35) 0px -3px 5px"};
`;

const NewTxt = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  background-color: yellow;
`;

const Home = () => {
  // 내가 속한 다이어리 리스트 불러오기
  // 맨처음, modalOpen 기준으로 변경되는 list 불러옴
  const navigate = useNavigate();
  const username = "kiki";
  const [diaryList, setDiaryList] = useState([]);
  const getList = () => {
    Axios.get(api.diary.getList()).then((res) => {
      setDiaryList(res.data.data);
    });
  };

  // 다이어리 추가
  const [createModal, setCreateMoal] = useState(false);
  const navigateAddDiary = () => {
    setCreateMoal(true);
  };
  const createModalHandler = (value: boolean) => {
    setCreateMoal(value);
  };

  // 초대 수락, 거절 Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [openItem, setOpenItem] = useState({ name: "", seq: 0, icon: 0 });
  const clickDiary = (diaryId: number, isJoined: number, diaryTitle: string, diaryCover: number) => {
    if (isJoined == 1) {
      navigate(`/diary/${diaryId}`);
    }
    if (isJoined == 0) {
      setOpenItem({ ["name"]: diaryTitle, ["seq"]: diaryId, ["icon"]: diaryCover });
      setModalOpen(true);
    }
  };
  const modalOpCl = (value: boolean) => {
    setModalOpen(value);
  };
  useEffect(() => {
    getList();
  }, [modalOpen]);

  return (
    <HomeWhole>
      <BackGroundModal modal={(modalOpen || createModal).toString()}>
        <StyledTitleBar className="title-bar">
          <HomeTitle>{username} `s 다요리 </HomeTitle>
        </StyledTitleBar>
        <HomeContainer>
          <HomeContentsGrid>
            <HomeContent>
              <AddDiaryButton onClick={navigateAddDiary}>추가</AddDiaryButton>
            </HomeContent>
            {diaryList.map((item, index) => (
              <HomeContent key={index}>
                <ImgBox
                  onClick={() => {
                    clickDiary(item.diarySeq, item.isJoined, item.diaryTitle, item.diaryCover);
                  }}
                >
                  <DiaryImg
                    src={require(`assets/coverIcons/img (${item.diaryCover}).svg`)}
                    alt=""
                    myturn={item.myTurn}
                    joined={item.isJoined}
                  />
                  {item.isJoined == 0 ? <NewTxt>NEW</NewTxt> : <></>}
                </ImgBox>
              </HomeContent>
            ))}
          </HomeContentsGrid>
        </HomeContainer>
      </BackGroundModal>
      {modalOpen ? (
        <InvitationModal func={modalOpCl} seq={openItem.seq} title={openItem.name} icon={openItem.icon} />
      ) : (
        <></>
      )}
      {createModal ? <CreateModal func={createModalHandler}></CreateModal> : <></>}
    </HomeWhole>
  );
};

export default Home;
