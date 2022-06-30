import React from "react";
import Header from "./AmzonClone/Header";
import Home from "./AmzonClone/Home";
import "./AppAmazon.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./AmzonClone/Location";
import Order from "./AmzonClone/Order";
import Signup from "./AmzonClone/Signup";
import CartItem from "./AmzonClone/CartItem";
const AppAmazon = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App_amazon">
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/location"
          element={
            <div className="App_amazon">
              <Header />
              <Location />
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <div className="App_amazon">
              <Header />
              <Order />
            </div>
          }
        />
        <Route
          path="/sign"
          element={
            <div className="App_amazon">
              <Header />
              <Signup />
            </div>
          }
        />
        <Route
          path="/cartItem"
          element={
            <div className="App_amazon">
              <Header />
              <CartItem />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppAmazon;
