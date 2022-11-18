import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../MyProfile/MyProfile';
import Rockets from './Rockets';
import store from '../../redux/configureStore';

describe('Rocket components', () => {
  it('Render component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rockets />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing the Profile component', () => {
  test('Check rendering of the Profile component', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <MyProfile />
        </Provider>
      </Router>,
    );
    expect(getByText('My Rockets')).toBeInTheDocument();
  });
});
