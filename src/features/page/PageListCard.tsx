import React, { Dispatch, SetStateAction } from "react";
import Text from "components/Text";
import styles from "features/page/Page.module.css";
import { PageInfoConfig } from "./PageList";

interface PageListCardProps {
  pageInfo: PageInfoConfig;
  index: number;
  click: number;
  setClicked: Dispatch<SetStateAction<number>>;
}

const PageListCard = ({ pageInfo, index, click, setClicked }: PageListCardProps) => {
  const clicked = () => {
    setClicked(index);
  };
  return (
    <div
      className={index === click ? styles.pageListCard_container_clicked : styles.pageListCard_container}
      onClick={clicked}
    >
      <div className={styles.pageListCard_img}></div>
      <div className={styles.pageListCard_content}>
        <div className={styles.pageListCard_writer}>
          <Text value={pageInfo.writer} type="text" />
          <Text value={pageInfo.date} type="caption" />
        </div>
        <Text value={pageInfo.title} type="text" />
      </div>
    </div>
  );
};

export default PageListCard;
