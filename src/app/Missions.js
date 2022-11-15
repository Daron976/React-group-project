import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissons } from '../redux/missions/missions';
import MissionItems from './mission-items';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missionReducer);

  useEffect(() => {
    if (missions.length !== 10) {
      dispatch(fetchMissons());
    }
  });

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <td><strong>Mission</strong></td>
            <td><strong>Description</strong></td>
            <td><strong>Status</strong></td>
            <td>&nbsp;</td>
          </tr>
          {missions.map((mission) => (
            <MissionItems
              key={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
