import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/RocketApi';
import RocketItems from './rocket-items';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    if (rockets.length !== 4) {
      dispatch(fetchRockets());
    }
  });

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
