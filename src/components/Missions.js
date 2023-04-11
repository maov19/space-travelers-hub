import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
// import '../styles/missionsStyles.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  return (
    <div className="missions-grid">
      <div className="missions-header">Mission Name</div>
      <div className="missions-header">Mission Description</div>
      <div className="missions-header">Status</div>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <div className="missions-name">{mission.mission_name}</div>
          <div className="missions-description">{mission.description}</div>
          <div className="missions-buttons">
            Status
          </div>
        </div>
      ))}
    </div>
  );
};

export default Missions;
