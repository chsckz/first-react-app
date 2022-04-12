import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import Board from "./Board";
import Repos from "./Repos";
import Welcome from "./Welcome";

// import your route components too

render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Board />}></Route>
      <Route path="/repos" element={<Repos />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);