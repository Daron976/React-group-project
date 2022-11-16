import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const root = combineReducers({
  missionReducer,
  rocketReducer,
});

const store = configureStore({ reducer: root });

export default store;
