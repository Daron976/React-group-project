import renderer from 'react-test-renderer';
import Rockets from '../__mocks__/Rockets';

describe('Rockets', () => {
  test('Rockets container items renders as expected', async () => {
    const snapRockets = renderer.create(
      <Rockets />,
    )
      .toJSON();
    expect(snapRockets).toMatchSnapshot();
  });
});
