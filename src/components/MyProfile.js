import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);

  // filter missions with reserved=true
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <h1>My Joined Missions</h1>
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
          </tr>
        </thead>
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
