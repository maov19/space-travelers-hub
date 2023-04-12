import React from 'react';
import { useSelector } from 'react-redux';
import './styles/myProfileStyles.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);

  // filter missions with reserved=true
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <h2 className="missions-title">My Missions</h2>
      <table className="my-profile-table">
        <tbody>
          {joinedMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
