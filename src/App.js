import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './app/NavBar';
import Rockets from './app/Rockets';
import Missions from './app/Missions';
import MyProfile from './app/MyProfile';
import { fetchMissons } from './redux/missions/missions';
import { fetchRockets } from './redux/rockets/RocketApi';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
