import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Error from '../../components/Error';
import WaitingScreen from '../../components/Rooms/Waiting';
import { getLobby, startGame } from '../../utils/Api2';


export const Waiting = () => {
  const [error, setError] = useState(false);
  const [gameId, setGameId] = useState(undefined);
  const { id } = useParams();

  const onSuccess = (room) => { setGameId(room.game_has_started ? room.game_id : undefined); };
  const onFailure = () => { setError(true); };

  const room = getLobby(id, onSuccess, onFailure); // GET /room/<id>
  const iAmOwner = room.owner === localStorage.getItem('user');

  // Setear un timer que haga get del roomStatus y guarde la respuesta en gameId
  const onClick = () => {
    startGame(id, setGameId(room.game_id), onFailure);
  };

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

export default Waiting;
