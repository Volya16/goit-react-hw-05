import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import viteLogo from "/vite.svg";

import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";

import "./App.css";

export default function App() {
  return (
    <div>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </main>
    </div>
  );
}
