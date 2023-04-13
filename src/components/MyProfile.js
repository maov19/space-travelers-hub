import React from 'react';
import { useSelector } from 'react-redux';
import './styles/myProfileStyles.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.mission.missions);
  const rockets = useSelector((store) => store.rocket.rockets);

  // filter missions with reserved=true
  const joinedMissions = missions.filter((mission) => mission.reserved);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div style={{ display: 'flex', width: '100%', gap: 20 }}>
      <div style={{ margin: 20, width: '100%' }}>
        <h2 className="missions-title">My Missions</h2>
        <table className="my-profile-table">
          <tbody>
            <>
              {joinedMissions.map((mission) => (
                <tr key={mission.missionId}>
                  <td>{mission.missionName}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
      <div style={{ margin: 20, width: '100%' }}>
        <h2 className="missions-title">My Rockets</h2>
        <table className="my-profile-table">
          <tbody>
            <>
              {bookedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.rocket_name}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
