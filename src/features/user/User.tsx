import Axios from "api/JsonAxios";
import api from "api/api";
import React, { useState } from "react";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Axios.post(api.auth.login(), {
            email,
            password,
          });
        }}
      >
        <label htmlFor="email">이메일:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">패스워드:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default User;
