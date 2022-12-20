import React from 'react';
import MainPage from './views/MainPage';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "./views/EventPage";


export default function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
