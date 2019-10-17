import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Error from '../../components/Error';
import RoomBody from '../../components/Rooms/Body';
import { joinRoom } from '../../utils/Api';


export const Body = (props) => {
  const {
    id, owner, players, maxPlayers,
  } = props;

  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
    const onSuccess = () => { setResult(<Redirect to="/waiting" />); };
    const onFailure = () => { setResult(<Error />); };
    joinRoom(id, onSuccess, onFailure);
  };

  return (
    result
    || (
    <RoomBody
      id={id}
      loading={loading}
      maxPlayers={maxPlayers}
      onClick={onClick}
      owner={owner}
      players={players.join(', ')}
    />
    )
  );
};

export default Body;


Body.propTypes = {
  id: PropTypes.number.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
};
