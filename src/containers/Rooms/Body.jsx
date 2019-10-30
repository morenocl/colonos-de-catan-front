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
    id, owner, players, maxPlayers, gameHasStarted,
  } = props;
  const { username } = props;

  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const join = () => {
    setLoading(true);
    const onSuccess = () => { setResult(<Redirect to={`/waiting/${id}`} />); };
    const onFailure = () => { setResult(<Error />); };
    joinRoom(id, onSuccess, onFailure);
  };

  const enter = () => {
    setResult(<Redirect to={`/waiting/${id}`} />);
  };

  const joined = players.includes(username);
  const full = maxPlayers <= players.length;

  let onClick;
  if (joined) onClick = enter;
  else if (!gameHasStarted && !full) onClick = join;
  else onClick = null;

  return (
    result
    || (
    <RoomBody
      id={id}
      disabled={loading}
      maxPlayers={maxPlayers}
      onClick={onClick}
      owner={owner}
      players={players.join(', ')}
      label={joined ? 'Enter' : 'Join'}
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
