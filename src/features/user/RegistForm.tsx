import React from "react";
import styles from "./RegistFrom.module.css";

export default function RegistForm() {
  return (
    <div className={styles.container}>
      <label htmlFor="email">E-Mail</label>
      <input type="email" name="email" id="inputEmail" />
      <button type="button">인증 요청</button>
      <input className={styles.noLable} placeholder="인증번호"></input>
      <button type="button">확인</button>
      <label htmlFor="password">Password</label>
      <input className={styles.noBtn} type="password" name="password" id="inputPassword" />
      <input className={styles.noBtn} type="password" id="confirmPassword" />
      <label htmlFor="email">E-Mail</label>
      <input type="email" name="email" id="inputEmail" />
      <button type="button">인증 요청</button>
    </div>
  );
}
