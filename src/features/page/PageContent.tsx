import React from "react";
import styles from "features/page/Page.module.css";
import PageComment from "./PageComment";

const PageContent = () => {
  return (
    <div className={styles.pageContent_container}>
      this is contents with aqua.
      <PageComment />
    </div>
  );
};

export default PageContent;
