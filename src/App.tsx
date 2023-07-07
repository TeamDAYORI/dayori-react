import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import User from "features/user/User";
import Diary from "features/diary/Diary";
import Page from "features/page/Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
