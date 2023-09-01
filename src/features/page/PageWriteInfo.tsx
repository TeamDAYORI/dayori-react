import React from "react";
import styles from "./Page.module.css";
import Button from "components/Button";

const PageWriteInfo = () => {
  return (
    <div className={styles.postWriteInfo_container}>
      <div className={styles.postWriteInfo_cover}>정보</div>
      <div className={styles.postWriteInfo_sticker}>
        <div>sticker</div>
      </div>
      <div className={styles.postWriteInfo_button}>
        <Button content="발행하기" />
      </div>
    </div>
  );
};

export default PageWriteInfo;
