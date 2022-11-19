import { useSelector } from 'react-redux';
import MissionItems from './mission-items';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <td className="table-header"><strong>Mission</strong></td>
            <td className="table-header"><strong>Description</strong></td>
            <td className="table-header"><strong>Status</strong></td>
            <td className="table-header">&nbsp;</td>
          </tr>
          {missions.map((mission) => (
            <MissionItems
              key={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              id={mission.mission_id}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
