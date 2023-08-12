import React from "react";
import Text from "components/Text";
import styles from "features/page/Page.module.css";

const PageListCard = () => {
  return (
    <div className={styles.pageListCard_container}>
      <div className={styles.pageListCard_img}></div>
      <div className={styles.pageListCard_content}>
        <div className={styles.pageListCard_writer}>
          <Text value="작성자" type="text" bold />
          <Text value="1일 전" type="caption" />
        </div>
        <Text value="식목일 이벤트 후기>..." type="caption" />
      </div>
    </div>
  );
};

export default PageListCard;
