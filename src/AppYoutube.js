import React from "react";
import "./App.css";
import Header from "./yutube/Header";
import RecommendedVideo from "./yutube/RecommendedVideo";
import SideBar from "./yutube/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./yutube/Search";

const AppiYoutube = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/searchPage/:search"
            element={
              <div className="app_page">
                <SideBar />
                <Search />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app_page">
                <SideBar />
                <RecommendedVideo />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppiYoutube;
