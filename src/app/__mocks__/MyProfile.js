import React from 'react';

const MyProfile = () => {
  const joinedMissions = [
    {
      id: 1,
      name: 'test',
      description: 'this is a test description',
      reserved: true,
    },
  ];

  const rocketsData = [
    {
      id: 1,
      name: 'test',
      description: 'this is a test description',
      reserved: true,
    },
  ];

  return (
    <section className="profile-container">
      <section className="join-missions">
        <h1>My Missions</h1>
        <ul className="mission-list">
          {joinedMissions
            .filter((mission) => mission.reserved === true)
            .map((mission) => (
              <li className="mission-list-item" key={mission.id}>
                {mission.mission_name}
              </li>
            ))}
        </ul>
      </section>
      <section className="reserved-rockets">
        <h1>My Rockets</h1>
        <ul className="rocket-list">
          {rocketsData
            .filter((rocket) => rocket.reserved === true)
            .map((rocket) => (
              <li className="rocket-list-item" key={rocket.id}>
                {rocket.rocket_name}
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
};

export default MyProfile;
