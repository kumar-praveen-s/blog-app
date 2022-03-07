import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Fitness from "./container/Fitness";
import Food from "./container/Food";
import Home from "./container/Home";
import Technology from "./container/Technology";
import Tourism from "./container/Tourism";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/food" element={<Food />} />
        <Route path="/fitness" element={<Fitness />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
