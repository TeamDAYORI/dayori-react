import React from "react";
import styles from "../features/page/Page.module.css";
import PageWrite from "features/page/PageWrite";
import PageWriteInfo from "features/page/PageWriteInfo";

const Post = () => {
  return (
    <div className={styles.post_container}>
      <PageWrite />
      <PageWriteInfo />
    </div>
  );
};

export default Post;
