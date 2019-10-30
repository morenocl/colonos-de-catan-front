import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Error from '../../components/Error';
import WaitingScreen from '../../components/Rooms/Waiting';
import { getRoom, startGame, cancelRoom } from '../../utils/Mock';
import useInterval from '../../utils/UseInterval';
import { dispatchRoom } from './Rooms.ducks';
import { RoomType } from '../../utils/ApiTypes';


const mapStateToProps = (state) => ({
  username: state.Auth.username,
  room: state.Rooms.room,
});

const mapDispatchToProps = ({
  setRoom: dispatchRoom,
});

export const Waiting = ({ username, room, setRoom }) => {
  const id = Number(useParams().id);
  const [stage, setStage] = useState('empty');

  const onSuccess = (r) => { setRoom(r); setStage('running'); };
  const onFailure = () => { setStage('error'); };

  const gameId = !!room && room.game_has_started ? room.game_id : null;
  const iAmOwner = !!room && room.owner === username;
  const onStart = () => {
    startGame(id, onFailure);
  };
  const onCancel = () => {
    cancelRoom(id);
    setStage('canceled');
  };

  const refresh = () => {
    if (!gameId) {
      getRoom(id, onSuccess, onFailure);
    }
  };

  useInterval(refresh, 4000);

  if (stage === 'empty') return <></>;

  if (stage === 'canceled') {
    setRoom(null);
    return (<Redirect to="/rooms" />);
  }
  if (gameId) {
    setRoom(null);
    return (<Redirect to={`/game/${gameId}`} />);
  }

  if (stage === 'running') {
    return (
      <WaitingScreen
        room={room}
        onStart={iAmOwner ? onStart : null}
        onCancel={iAmOwner ? onCancel : null}
      />
    );
  }

  return (<Error />);
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiting);

Waiting.propTypes = {
  username: PropTypes.string.isRequired,
  room: RoomType,
  setRoom: PropTypes.func.isRequired,
};

Waiting.defaultProps = {
  room: null,
};
