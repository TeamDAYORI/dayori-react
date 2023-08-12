import React from "react";
import styles from "features/page/Page.module.css";
import Text from "components/Text";

const PageComment = () => {
  return (
    <div className={styles.pageComment_container}>
      <Text value="댓글" type="title" />
      <div className={styles.pageComment_input}>
        <div className="field-row">
          <input id="text17" type="text" />
          <button>입력</button>
        </div>
      </div>
      <ul>
        <li>
          <Text value="chan2" type="text" />
          <Text value="그러게 왜 벌써 4월이야? 어이없어~~" type="text" />
        </li>
        <li>
          <Text value="chan2chan2chan2chan2chan2" type="text" />
          <Text
            value="그러게 왜 벌써 4월이야? 어이없어~~그러게 왜 벌써 4월이야? 어이없어~~그러게 왜 벌써 4월이야? 어이없어~~"
            type="text"
          />
        </li>
        <li>
          <Text value="chan2" type="text" />
          <Text value="그러게 왜 벌써 4월이야? 어이없어~~" type="text" />
        </li>
        <li>
          <Text value="chan2" type="text" />
          <Text value="그러게 왜 벌써 4월이야? 어이없어~~" type="text" />
        </li>
        <li>
          <Text value="chan2" type="text" />
          <Text value="그러게 왜 벌써 4월이야? 어이없어~~" type="text" />
        </li>
        <li>
          <Text value="chan2" type="text" />
          <Text value="그러게 왜 벌써 4월이야? 어이없어~~" type="text" />
        </li>
        <li>
          <Text value="chan2" type="text" />
          <Text value="그러게 왜 벌써 4월이야? 어이없어~~" type="text" />
        </li>
      </ul>
    </div>
  );
};

export default PageComment;
