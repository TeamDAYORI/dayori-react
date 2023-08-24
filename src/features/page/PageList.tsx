import React, { useEffect, useState } from "react";
import styles from "./Page.module.css";
import PageListCard from "./PageListCard";
import { useNavigate } from "react-router-dom";
import PAGE_LIST_INFO from "./TmpPageListInfo";

export interface PageInfoConfig {
  title: string;
  writer: string;
  date: string;
}

const PageList = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(2);
  const [clicked, setClicked] = useState(2);

  const generateItems = () => {
    const tmpItems = [];
    if (PAGE_LIST_INFO.length <= 5) {
      PAGE_LIST_INFO.map((pageInfo: PageInfoConfig, index: number) => {
        tmpItems.push(
          <PageListCard
            key={index}
            click={clicked}
            index={index}
            pageInfo={PAGE_LIST_INFO[index]}
            setClicked={setClicked}
          />,
        );
      });
    } else {
      for (let i = active - 2; i < active + 3; i++) {
        let index = i;
        if (i < 0) index = PAGE_LIST_INFO.length + i;
        else if (i >= PAGE_LIST_INFO.length) index = i % PAGE_LIST_INFO.length;
        tmpItems.push(
          <PageListCard
            key={index}
            click={clicked}
            index={index}
            pageInfo={PAGE_LIST_INFO[index]}
            setClicked={setClicked}
          />,
        );
      }
    }
    return tmpItems;
  };

  const moveToCreatePage = () => {
    navigate("/post");
  };

  useEffect(() => {
    setActive(clicked);
  }, [clicked]);

  return (
    <div className={styles.pageList_container}>
      <div className={styles.pageList_cover}>
        <div className={styles.pageList_cover_img}></div>
      </div>
      <div className={styles.pageList_contents}>
        <div className={styles.pageList_background}>{generateItems()}</div>
        <div className={styles.pageList_btn}>
          <button onClick={moveToCreatePage}>새 페이지 작성</button>
          <button>SETTING</button>
        </div>
      </div>
    </div>
  );
};

export default PageList;
