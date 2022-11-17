import renderer from 'react-test-renderer';
import Missions from '../__mocks__/Missions';

describe('Missions', () => {
  test('Mission container items renders as expected', async () => {
    const snapMissions = renderer.create(
      <Missions />,
    )
      .toJSON();
    expect(snapMissions).toMatchSnapshot();
  });
});
