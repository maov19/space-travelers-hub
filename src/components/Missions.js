import { useSelector, useDispatch } from 'react-redux';
import { joinMission, cancelMission } from '../redux/missions/missionsSlice';
import './styles/missionsStyles.css';
import missionButtonStyles from './styles/missionButtonStyles';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };
  const handleCancelMission = (missionId) => {
    dispatch(cancelMission(missionId));
  };

  return (
    <div>
      <div className="missions-grid">
        <div className="header-row">
          <div className="missions-header">Mission</div>
          <div className="missions-header-description">Description</div>
          <div className="missions-header-status">Status</div>
        </div>
        {missions.map((mission) => (
          <div key={mission.missionId} className="mission-row">
            <div className="mission-name">{mission.missionName}</div>
            <div className="mission-description">{mission.description}</div>
            <div className="mission-status">
              {mission.reserved ? (
                <button className="member-button" type="button" style={missionButtonStyles.activeMember}>
                  Active Member
                </button>
              ) : (
                <button className="member-button" type="button" style={missionButtonStyles.notMember}>
                  NOT A MEMBER
                </button>
              )}
            </div>
            <div className="mission-status">
              {mission.reserved ? (
                <button className="mission-button" type="button" style={missionButtonStyles.leaveMission} onClick={() => handleCancelMission(mission.missionId)}>
                  Leave Mission
                </button>
              ) : (
                <button className="mission-button" type="button" style={missionButtonStyles.joinMission} onClick={() => handleJoinMission(mission.missionId)}>
                  Join Mission
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
