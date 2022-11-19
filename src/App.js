import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './app/Navigation/NavBar';
import Rockets from './app/Rockets/Rockets';
import Missions from './app/Missions/Missions';
import MyProfile from './app/MyProfile/MyProfile';
import { fetchMissons } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissons());
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
