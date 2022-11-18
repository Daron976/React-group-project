import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../Navigation/NavBar';

describe('Navigation', () => {
  test('Navigation container items renders as expected', async () => {
    const snapNavigation = renderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    )
      .toJSON();
    expect(snapNavigation).toMatchSnapshot();
  });
});
