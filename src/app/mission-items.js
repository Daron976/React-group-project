import React from 'react';
import PropTypes from 'prop-types';

const MissionItems = (props) => {
  const {
    name, description,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>Not A Member</td>
      <td>
        <button
          type="button"
          name="join"
          id="join"
          className="btn"
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

MissionItems.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItems;
