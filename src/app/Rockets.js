import { useSelector } from 'react-redux';
import RocketItems from './rocket-items';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);

  return (
    <section className="rockets-holder">
      {rockets.map((rocket) => (
        <RocketItems
          key={rocket.id}
          img={rocket.flickr_images[0]}
          name={rocket.rocket_name}
          description={rocket.description}
        />
      ))}
    </section>
  );
};

export default Rockets;
