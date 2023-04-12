import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import store from '../../store';
import Rockets from '../Rockets';
import { reserveRocket } from '../../redux/rockets/rocketsSlice';

const mockStore = configureMockStore([]);

const RocketProvider = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

describe('Check if Rocket components render', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      rocket: {
        rockets: [
          {
            id: 1,
            rocket_name: 'Rocket 1',
            description: 'description 1',
            flickr_images: 'image 1',
          },
          {
            id: 2,
            rocket_name: 'Rocket 2',
            description: 'description 2',
            flickr_images: 'image 2',
          },
        ],
      },
    });
    store.dispatch(reserveRocket(1));
  });

  it('Renders Rockets component', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
    expect(screen.getByText('Rocket 2')).toBeInTheDocument();
  });

  it('Renders entire Rockets component correctly', () => {
    const rockets = render(<RocketProvider />);
    expect(rockets).toMatchSnapshot();
  });
});
