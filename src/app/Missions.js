import { useSelector } from 'react-redux';
import MissionItems from './mission-items';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);

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
              id={mission.mission_id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
