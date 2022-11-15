import React from 'react';
import PropTypes from 'prop-types';

const RocketItems = (props) => {
  const {
    img, description, name,
  } = props;
  return (
    <div className="rocket">
      <img src={img} alt={name} className="rocket-img" />
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="rocket-btn-width">
          <button
            type="button"
            name="reserve"
            id="reserve"
            className="rocket-btn"
          >
            Reserse Rocket
          </button>
        </div>
      </div>
    </div>
  );
};

RocketItems.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketItems;
