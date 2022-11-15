import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';

const root = combineReducers({
  missionReducer,
});

const store = configureStore({ reducer: root });

export default store;
