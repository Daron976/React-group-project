import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div className="each">
      <div className="pictFrame">
        <img
          src={rocket.flickr_images}
          alt={rocket.rocket_name}
          className="pict"
        />
      </div>
      <div className="infor">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && <span className="reservRock">Reserved</span>}
          {rocket.description}
        </p>
        <Button
          variant={rocket.reserved ? 'outline-primary' : 'primary'}
          type="button"
          className="rocketBtn"
        >
          {rocket.reserved ? 'Cancel reservation' : 'Reserve Rockets'}
        </Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Rockets = () => {
  const rocketsData = [
    {
      id: 1,
      rocket_name: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
      reserved: true,
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
        'https://imgur.com/azYafd8.jpg',
      ],
    },
  ];
  return (
    <div className="Rocketslist">
      {rocketsData.map((rocketData) => (
        <Rocket key={rocketData.id} rocket={rocketData} id={rocketData.id} />
      ))}
    </div>
  );
};

export default Rockets;
