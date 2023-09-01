import React from "react";
import styles from "components/css/Text.module.css";

interface Props {
  value: string;
  type?: "caption" | "text" | "title";
  bold?: boolean;
  underline?: boolean;
  cursor?: boolean;
}

const Text = ({ value, type, bold, underline, cursor }: Props) => {
  const style = {
    fontWeight: bold ? "600" : "400",
    fontFamily: "DOSGothic",
    textDecoration: underline ? "underline" : null,
    cursor: cursor ? "pointer" : null,
  };
  return (
    <>
      <span className={`${styles[type]}`} style={style}>
        {value}
      </span>
    </>
  );
};

Text.defaultProps = {
  value: "내용이 들어갑니다.",
  type: "sample",
};

export default Text;
