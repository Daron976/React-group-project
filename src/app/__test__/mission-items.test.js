import renderer from 'react-test-renderer';
import MissionItems from '../__mocks__/mission-items';

describe('Mission items', () => {
  const missionArray = [
    {
      id: 1,
      name: 'test',
      description: 'this is a test description',
    },
  ];

  test('mission items renders as expected', async () => {
    const snapMissionItems = renderer.create(
      <MissionItems
        key={missionArray[0].id}
        id={missionArray[0].id}
        name={missionArray[0].name}
        description={missionArray[0].description}
      />,
    )
      .toJSON();
    expect(snapMissionItems).toMatchSnapshot();
  });
});
