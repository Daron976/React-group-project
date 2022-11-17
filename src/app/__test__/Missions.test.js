import renderer from 'react-test-renderer';
import Missions from '../__mocks__/Missions';

describe('Mission items', () => {
  test('Mission container items renders as expected', async () => {
    const snapMissionItems = renderer.create(
      <Missions />,
    )
      .toJSON();
    expect(snapMissionItems).toMatchSnapshot();
  });
});
