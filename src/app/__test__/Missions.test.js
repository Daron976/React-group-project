import { renderState } from '../../utils/test-utils';
import Missions from '../Missions/Missions';

describe('Missions', () => {
  test('Mission container items renders as expected', async () => {
    const snapMissions = renderState(<Missions />);
    expect(snapMissions).toMatchSnapshot();
  });
});
