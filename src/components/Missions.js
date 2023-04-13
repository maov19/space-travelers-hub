import { useSelector, useDispatch } from 'react-redux';
import { joinMission, cancelMission } from '../redux/missions/missionsSlice';
import './styles/missionsStyles.css';
import missionButtonStyles from './styles/missionButtonStyles';

const Missions = () => {
  const data = useSelector((store) => store.mission);
  const { missions } = data;
  const dispatch = useDispatch();
  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };
  const handleCancelMission = (missionId) => {
    dispatch(cancelMission(missionId));
  };

  return (
    <div>
      <table className="missions-table">
        <thead>
          <tr className="header-row">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.missionId} className="mission-row">
              <td className="mission-name">{mission.missionName}</td>
              <td className="mission-description">{mission.description}</td>
              <td className="mission-status">
                {mission.reserved ? (
                  <button className="member-button" type="button" style={missionButtonStyles.activeMember}>
                    Active Member
                  </button>
                ) : (
                  <button className="member-button" type="button" style={missionButtonStyles.notMember}>
                    NOT A MEMBER
                  </button>
                )}
              </td>
              <td className="mission-status">
                {mission.reserved ? (
                  <button
                    className="mission-button"
                    type="button"
                    style={missionButtonStyles.leaveMission}
                    onClick={() => handleCancelMission(mission.missionId)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    className="mission-button"
                    type="button"
                    style={missionButtonStyles.joinMission}
                    onClick={() => handleJoinMission(mission.missionId)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
