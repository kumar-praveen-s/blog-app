import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Tech from "./pages/Tech";
import Travel from "./pages/Travel";
import Sports from "./pages/Sports";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
