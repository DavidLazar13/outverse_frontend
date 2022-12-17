import React from 'react';
import MainPage from './views/MainPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "./views/EventPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
