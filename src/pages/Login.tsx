import React, { useState } from "react";
import Axios from "api/JsonAxios";
import api from "api/api";
import Input from "components/Input";
import SubmitButton from "components/SubmitButton";
import styles from "features/user/User.module.css";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "slices/authSlice";
import Text from "components/Text";
import Logo from "assets/dayori_logo.png";
import CUModal from "features/diary/CUModal";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const emailHandler = (value: string) => {
    setEmail(value);
  };

  const [password, setPassword] = useState<string>("");
  const passHandler = (value: string) => {
    setPassword(value);
  };

  const login = async () => {
    if (!email || !password) return;
    await Axios.post(api.auth.login(), {
      email,
      password,
    })
      .then((res) => {
        if (res.status === 200) {
          setAccessToken({ accesstoken: res.data.token });
          sessionStorage.setItem("accessToken", res.data.token);
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <CUModal
      title="Login"
      element={
        <>
          <div className={styles.login_logo}>
            <img src={Logo} alt="Dayori Logo" />
          </div>
          <div className={styles.login_input}>
            <Input
              title="Email"
              value={email}
              placeHolder="Email을 입력하세요."
              buttonFlag={false}
              func={emailHandler}
            />
            <Input
              title="Password"
              value={password}
              placeHolder="비밀번호를 입력하세요."
              buttonFlag={false}
              func={passHandler}
            />
            <div className={styles.login_button} onClick={login}>
              <SubmitButton labelprops="로그인" />
            </div>
            <div className={styles.login_text}>
              <Text value="처음이신가요?" type="title" />
              <div onClick={() => navigate("/signup")}>
                <Text value="회원가입" type="title" underline cursor />
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Login;
