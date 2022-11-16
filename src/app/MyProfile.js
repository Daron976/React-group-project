import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const joinedMissions = useSelector((state) => state.missionReducer);

  return (
    <section className="join-missions">
      <h1>My Missions</h1>
      <ul className="mission-list">
        {joinedMissions
          .filter((mission) => mission.reserved === true)
          .map((mission) => <li key={mission.mission_id}>{mission.mission_name}</li>)}
      </ul>
    </section>
  );
};

export default MyProfile;
