import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './app/NavBar';
import Rockets from './app/Rockets';
import Missions from './app/Missions';
import MyProfile from './app/MyProfile';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
