import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import InputTitle from "components/InputTitle";
import axios from "axios";
import api from "api/api";

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
  position: relative;
`;

const InviteInputContents = styled.div`
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

const SearchListBox = styled.div`
  position: absolute;
  top: 44px;
  width: 80%;
  max-height: 8rem;
`;

const SearchItem = styled.div`
  margin: 2px;
`;

const SelectedMembers = styled.div`
  margin: 1rem 0;
  height: 8rem;
  overflow: auto;
  padding: 0.5rem;
`;
const SelectedItem = styled.div`
  margin: 2px;
`;

const Name = styled.span`
  font-size: 1.4rem;
  margin: 0;
`;
const Email = styled.span`
  font-size: 1.2rem;
  margin: 0 0.5rem;
  color: #676767;
`;

interface InputProps {
  title: string;
  members: number[];
  memberHandler: any;
}
interface SelectedMemberType {
  name: string;
  seq: number;
}

const InviteMembers = (props: InputProps) => {
  const [target, setTarget] = useState<string>("");
  const [targetSeq, setTargetSeq] = useState<number>(0);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value);
  };

  // 멤버 검색
  const [search, setSearch] = useState([]);
  useEffect(() => {
    if (target != "") {
      axios({
        method: "GET",
        url: api.diary.searchMember(target),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1bmhoeXllZTExQGdtYWlsLmNvbSIsImlhdCI6MTY5Mjg1NDIwOCwiZXhwIjoxNjkyOTQwNjA4fQ.q3uohXKi033IZxHfTPjXlzDI6pVHs1Ly-xe_O1rCXzA",
        },
      }).then((res) => {
        console.log(res.data);
        setSearch(res.data);
      });
    }
  }, [target]);

  const selectMember = (name: string, seq: number) => {
    setTarget(name);
    setTargetSeq(seq);
  };

  const [selectedMembers, setSelectedMembers] = useState<SelectedMemberType[]>([]);
  const addMemberHandler = () => {
    setSelectedMembers([...selectedMembers, { name: target, seq: targetSeq }]);
    props.memberHandler([...props.members, targetSeq]);
    setTarget("");
  };
  const removeMemberHandler = (seq: number) => {
    setSelectedMembers(selectedMembers.filter((item) => item.seq != seq));
    props.memberHandler(props.members.filter((item) => item != seq));
  };

  return (
    <div>
      <InputContainer>
        <InputTitle title={props.title}></InputTitle>
        <InviteContents>
          <InviteInputContents>
            <InputTag type="text" onChange={changeHandler} value={target}></InputTag>
            <AddButton onClick={addMemberHandler}>추가</AddButton>
          </InviteInputContents>
          <SelectedMembers className="sunken-panel">
            {selectedMembers.map((item, index) => (
              <SelectedItem key={index} onClick={() => removeMemberHandler(item.seq)}>
                <Name>{item.name}</Name>
              </SelectedItem>
            ))}
          </SelectedMembers>
          <SearchListBox className="sunken-panel">
            {search && target ? (
              search.map((item, index) => (
                <SearchItem key={index} onClick={() => selectMember(item.nickName, item.userSeq)}>
                  <Name>{item.nickName}</Name>
                  <Email>{item.userEmail}</Email>
                </SearchItem>
              ))
            ) : (
              <></>
            )}
          </SearchListBox>
        </InviteContents>
      </InputContainer>
    </div>
  );
};

export default InviteMembers;
