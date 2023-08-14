import React from "react";
import styles from "features/page/Page.module.css";
import PageList from "features/page/PageList";
import PageContent from "features/page/PageContent";

const Page = () => {
  return (
    <div className={styles.page_container}>
      <PageList />
      <PageContent />
    </div>
  );
};

export default Page;
