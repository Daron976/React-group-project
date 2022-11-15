import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/RocketApi';

const root = combineReducers({
  missionReducer,
  rocketReducer,
});

const store = configureStore({ reducer: root });

export default store;
