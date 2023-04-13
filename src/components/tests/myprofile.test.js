import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import MyProfile from '../MyProfile';

const Profile = () => (
  <Provider store={store}>
    <MyProfile />
  </Provider>
);

it('Renders MyProfile component correctly', () => {
  const profile = render(<Profile />);
  expect(profile).toMatchSnapshot();
});
