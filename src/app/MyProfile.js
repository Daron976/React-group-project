import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const joinedMissions = useSelector((state) => state.missionReducer);

  return (
    <section className="profile-container">
      <section className="join-missions">
        <h1>My Missions</h1>
        <ul className="mission-list">
          {joinedMissions
            .filter((mission) => mission.reserved === true)
            .map((mission) => <li className="mission-list-item" key={mission.mission_id}>{mission.mission_name}</li>)}
        </ul>
      </section>
      <section className="reserved-rockets">
        <h1>Header</h1>
        <ul className="rocket-list" />
      </section>
    </section>
  );
};

export default MyProfile;
