import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join, leave } from '../../redux/missions/missions';

const MissionItems = (props) => {
  const {
    id, name, description,
  } = props;

  const [btnState, setBtnState] = useState('Join Mission');

  const [memberState, setMemberState] = useState('NOT A MEMBER');

  const dispatch = useDispatch();

  const btnText = (e) => {
    if (e.target.textContent === 'Join Mission') {
      setBtnState('Leave Mission');
      setMemberState('Active Member');
      dispatch(join(id));
    } else {
      dispatch(leave(id));
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItems;
