import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";
import "./App.css";



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id " element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
