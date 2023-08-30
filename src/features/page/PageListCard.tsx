import React, { Dispatch, SetStateAction } from "react";
import Text from "components/Text";
import styles from "features/page/Page.module.css";
import { PageInfoConfig } from "./PageList";

interface PageListCardProps {
  index: number;
  level?: number;
  click: number;
  itemCnt: number;
  pageInfo: PageInfoConfig;
  setClicked: Dispatch<SetStateAction<number>>;
}

const PageListCard = ({ index, level, click, itemCnt, pageInfo, setClicked }: PageListCardProps) => {
  const clicked = () => {
    if (index >= 0 && index < itemCnt) setClicked(index);
  };
  return (
    <div
      className={
        index === click
          ? `${styles.pageListCard_container_clicked} ${styles[`level${level}`]}`
          : index < 0 || index >= itemCnt
          ? `${styles.pageListCard_container_none} ${styles[`level${level}`]}`
          : `${styles.pageListCard_container} ${styles[`level${level}`]}`
      }
      onClick={clicked}
    >
      <div className={styles.pageListCard_img}></div>
      <div className={styles.pageListCard_content}>
        <div className={styles.pageListCard_writer}>
          <Text value={pageInfo?.writer} type="text" />
          <Text value={pageInfo?.date} type="caption" />
        </div>
        <Text value={pageInfo?.title} type="caption" />
      </div>
    </div>
  );
};

export default PageListCard;
