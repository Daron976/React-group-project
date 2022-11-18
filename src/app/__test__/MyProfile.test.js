import renderer from 'react-test-renderer';
import MyProfile from '../__mocks__/MyProfile';

describe('Profile', () => {
  test('Profile container items renders as expected', async () => {
    const snapProfile = renderer.create(
      <MyProfile />,
    )
      .toJSON();
    expect(snapProfile).toMatchSnapshot();
  });
});
