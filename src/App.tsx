import React from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/diary" element={<Diary />} />
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
