import React from 'react';
import { renderState } from '../../utils/test-utils';
import MissionItems from '../Missions/mission-items';

describe('Mission items', () => {
  const missionArray = [
    {
      id: 1,
      name: 'test',
      description: 'this is a test description',
    },
  ];

  test('mission items renders as expected', async () => {
    const test = renderState(
      <MissionItems
        key={missionArray[0].id}
        id={missionArray[0].id}
        name={missionArray[0].name}
        description={missionArray[0].description}
      />,
    );

    expect(test).toMatchSnapshot();
  });
});
