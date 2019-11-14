import React, { useEffect } from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Error from '../../components/Error';
import WaitingScreen from '../../components/Rooms/Waiting';
import { getRoom, startGame, cancelRoom } from '../../utils/Api';
import useInterval from '../../utils/UseInterval';
import { dispatchRoom, dispatchWaiting } from './Rooms.ducks';
import { RoomType } from '../../utils/ApiTypes';


export const mapStateToProps = (state) => ({
  username: state.Auth.username,
  room: state.Rooms.room,
  stage: state.Rooms.waitingStage,
});

export const mapDispatchToProps = ({
  setRoom: dispatchRoom,
  setStage: dispatchWaiting,
});

export const Waiting = ({
  username, room, setRoom, setStage, stage,
}) => {
  const { id } = useParams();

  const onSuccess = (r) => {
    setRoom(r);
    setStage(r.game_has_started ? 'started' : 'running');
  };
  const onFailure = (statusText) => {
    setStage(statusText === 404 ? 'canceled' : 'error');
  };

  // Refresh every 5 seconds and when mounted.
  const refresh = () => { getRoom(id, onSuccess, onFailure); };
  useEffect(refresh, []);
  useInterval(() => { if (stage !== 'started') refresh(); }, 5000);

  const gameId = !!room && room.game_has_started ? room.game_id : null;
  const iAmOwner = !!room && room.owner === username;
  const onStart = () => { startGame(id, refresh, onFailure); };
  const onCancel = () => { cancelRoom(id); setStage('canceled'); };

  if (stage === 'empty') return (<div data-testid="waiting-empty" />);

  if (stage === 'canceled') {
    setStage('empty');
    return (<Redirect to="/rooms" />);
  }

  if (stage === 'started') return (<Redirect to={`/game/${gameId}`} />);

  if (stage === 'running') {
    return (
      <WaitingScreen
        room={room}
        onStart={iAmOwner ? onStart : null}
        onCancel={iAmOwner ? onCancel : null}
      />
    );
  }

  return (
    <div>
      <Error />
      <Link to="/rooms">
        <Button>
          Back to Rooms
        </Button>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiting);


Waiting.propTypes = {
  username: PropTypes.string.isRequired,
  room: RoomType,
  setRoom: PropTypes.func.isRequired,
  setStage: PropTypes.func.isRequired,
  stage: PropTypes.string.isRequired,
};

Waiting.defaultProps = {
  room: null,
};
