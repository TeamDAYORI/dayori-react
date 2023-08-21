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

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/page" element={<Page />} />
          <Route path="/post" element={<Post />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
