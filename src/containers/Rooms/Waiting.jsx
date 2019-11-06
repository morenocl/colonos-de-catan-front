import React, { useState, useEffect } from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
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
  const { id } = useParams();

  const [stage, setStage] = useState('empty');

  const onSuccess = (r) => {
    setRoom(r);
    setStage(r.game_has_started ? 'started' : 'running');
  };
  const onFailure = (r) => {
    setStage(r.status === 404 ? 'canceled' : 'error');
  };

  const gameId = !!room && room.game_has_started ? room.game_id : null;
  const iAmOwner = !!room && room.owner === username;
  const onStart = () => { startGame(id, onFailure); };
  const onCancel = () => { cancelRoom(id); setStage('canceled'); };

  // Refresh every 5 seconds and when mounted.
  const refresh = () => { getRoom(id, onSuccess, onFailure); };
  useEffect(refresh, []);
  useInterval(() => { if (stage !== 'started') refresh(); }, 5000);

  if (stage === 'empty') return (<></>);

  if (stage === 'canceled') return (<Redirect to="/rooms" />);

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

  if (stage === 'error') {
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
  }
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
