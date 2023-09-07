import React, { useEffect, useState } from "react";
import { Routes, Route, useActionData, useLocation } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import User from "features/user/User";
import Diary from "features/diary/Diary";
import Page from "pages/Page";
import Header from "components/Header";
import Test from "pages/Test";
import Post from "pages/Post";
import Home from "pages/Home";
import CreateDiary from "pages/CreateDiary";
import Login from "pages/Login";

function App() {
  const location = useLocation();
  const [pathName, setPathName] = useState(false);

  useEffect(() => {
    setPathName(["/login", "/signup"].includes(location.pathname));
  }, [location]);

  return (
    <div className="App">
      <div className={!pathName && "App-container"}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/diary/:diaryId" element={<Diary />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path="/post" element={<Post />} />
          <Route path="/test" element={<Test />} />
          <Route path="/adddiary" element={<CreateDiary />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
