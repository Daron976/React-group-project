import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MissionItems = (props) => {
  const {
    name, description,
  } = props;

  const [btnState, setBtnState] = useState('Join Mission');

  const [memberState, setMemberState] = useState('NOT A MEMBER');

  const btnText = (e) => {
    if (e.target.textContent === 'Join Mission') {
      setBtnState('Leave Mission');
      setMemberState('Active Member');
    } else {
      setMemberState('NOT A MEMBER');
      setBtnState('Join Mission');
    }
  };

  return (
    <tr>
      <td className="td-name">{name}</td>
      <td className="td-description">{description}</td>
      <td>
        <div
          className="td-status"
          style={{ background: memberState === 'NOT A MEMBER' ? '#6c767c' : '#24a1b3' }}
        >
          {memberState}
        </div>
      </td>
      <td className="td-btn">
        <button
          type="button"
          name="join"
          id="join"
          className="btn"
          onClick={btnText}
          style={{
            border: btnState === 'Join Mission' ? '1px solid #7a7a7a' : '1px solid #cf747c',
            color: btnState === 'Leave Mission' ? '#cf747c' : 'black',
          }}
        >
          {btnState}
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
