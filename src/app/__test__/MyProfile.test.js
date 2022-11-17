import renderer from 'react-test-renderer';
import MyProfile from '../__mocks__/MyProfile';

describe('Profile Items', () => {
  test('Profile container items renders as expected', async () => {
    const snapMissionItems = renderer.create(
      <MyProfile />,
    )
      .toJSON();
    expect(snapMissionItems).toMatchSnapshot();
  });
});
