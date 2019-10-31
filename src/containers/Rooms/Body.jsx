import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Error from '../../components/Error';
import RoomBody from '../../components/Rooms/Body';
import { joinRoom } from '../../utils/Mock';


const mapStateToProps = (state, ownProps) => ({
  username: state.Auth.username,
  ...ownProps,
});

export const Body = (props) => {
  const {
    id, owner, players, maxPlayers, username,
  } = props;

  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
    const onSuccess = () => { setResult(<Redirect to={`/waiting/${id}`} />); };
    const onFailure = () => { setResult(<Error />); };
    joinRoom(id, onSuccess, onFailure);
  };

  const disabled = !players.includes(username) && maxPlayers <= players.length;

  return (
    result
    || (
    <RoomBody
      id={id}
      disabled={disabled || loading}
      maxPlayers={maxPlayers}
      onClick={onClick}
      owner={owner}
      players={players.join(', ')}
    />
    )
  );
};

export default connect(mapStateToProps)(Body);


Body.propTypes = {
  id: PropTypes.number.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  username: PropTypes.string.isRequired,
};
