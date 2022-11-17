import { Link } from 'react-router-dom';
import logo from '../resources/planet.png';

const NavBar = () => (
  <div className="navs">
    <div className="NavBar">
      <img src={logo} alt="logo" />
      <h1> Space Rockets</h1>
    </div>
    <div className="Links">
      <div
        className="link-container"
      >
        <Link to="/" className="home">Rockets</Link>
        <div className="divider">|</div>
        <Link to="Missions" className="missions">Missions</Link>
        <div className="divider">|</div>
        <Link to="MyProfile" className="myProfile">My Profile</Link>
      </div>
    </div>
  </div>
);
export default NavBar;
