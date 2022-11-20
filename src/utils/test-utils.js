/*eslint-disable*/
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import missionReducer from '../redux/missions/missions';

export const renderState = (
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: { missionReducer }, preloadedState }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => <Provider store={store}>{ children }</Provider>;

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
