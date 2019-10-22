import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Error from '../../components/Error';
import WaitingScreen from '../../components/Rooms/Waiting';
import { getRoom, startGame } from '../../utils/Api';
import useInterval from '../../utils/UseInterval';


const mapStateToProps = (state) => ({
  user: state.Auth.user,
});


export const Waiting = ({ user }) => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [room, setRoom] = useState({
    id: 0,
    name: '',
    players: [],
    max_layers: 0,
    game_has_started: false,
    owner: '',
    game_id: 0,
  });

  const onSuccess = (r) => { setRoom(r); };
  const onFailure = () => { setError(true); };

  const gameId = room.game_has_started ? room.game_id : undefined;
  const iAmOwner = room.owner === user;

  const onClick = () => {
    startGame(id, undefined, onFailure);
  };

  const refresh = () => {
    if (!room.game_has_started) {
      getRoom(id, onSuccess, onFailure);
    }
  };
  useInterval(refresh, 2000);

  if (error) {
    return (<Error />);
  }
  if (gameId) {
    return (<Redirect to={`/game/${gameId}`} />);
  }

  return (
    <WaitingScreen room={room} onClick={iAmOwner ? onClick : null} />
  );
};

export default connect(mapStateToProps)(Waiting);

Waiting.propTypes = {
  user: PropTypes.string.isRequired,
};
