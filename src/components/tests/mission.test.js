import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import store from '../../store';
import Missions from '../Missions';
import { joinMission } from '../../redux/missions/missionsSlice';

const mockStore = configureMockStore([]);

const MissionsProvider = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Check if Missions component renders', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      mission: {
        missions: [
          {
            missionId: 1,
            missionName: 'Mission 1',
            description: 'description 1',
          },
          {
            missionId: 2,
            missionName: 'Mission 2',
            description: 'description 2',
          },
        ],
      },
    });
    store.dispatch(joinMission(1));
  });

  it('Renders Missions component', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
  });

  it('Renders entire Missions component correctly', () => {
    const missions = render(<MissionsProvider />);
    expect(missions).toMatchSnapshot();
  });
});
