import React from "react";
import styles from "./Page.module.css";
import Text from "components/Text";
import PageListCard from "./PageListCard";

const PageList = () => {
  return (
    <div className={styles.pageList_container}>
      <div className={styles.pageList_cover}>커버 자리</div>
      <div className={styles.pageList_contents}>
        <Text value="page list 페이지 리스트" type="text" />
        <PageListCard />
      </div>
    </div>
  );
};

export default PageList;
