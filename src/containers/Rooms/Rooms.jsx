import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  dispatchError,
  dispatchRunning,
  dispatchRooms,
  dispatchCreate,
} from './Rooms.ducks';
import Error from '../../components/Error';
import RoomsScreen from '../../components/Rooms/Rooms';
import { getRooms } from '../../utils/Mock';
import { RoomType, RoomsStateType } from '../../utils/ApiTypes';
import useInterval from '../../utils/UseInterval';


const mapStateToProps = (state) => ({
  rooms: state.Rooms.rooms,
  stage: state.Rooms.stage,
});

const mapDispatchToProps = ({
  setError: dispatchError,
  setRunning: dispatchRunning,
  setRooms: dispatchRooms,
  setCreate: dispatchCreate,
});

export const Rooms = (props) => {
  const { rooms, stage } = props;
  const {
    setError, setRunning, setRooms, setCreate,
  } = props;

  const [errorMessage, setErrorMessage] = useState('');

  const refresh = () => {
    const onSuccess = (res) => {
      setRunning();
      setRooms(res);
    };
    const onFailure = (err) => {
      setError();
      setErrorMessage(err.message);
    };

    getRooms(onSuccess, onFailure);
  };

  // Refresh every 5 seconds and when mounted.
  useEffect(refresh, []);
  useInterval(refresh, 5000);

  if (stage === 'empty') return (<></>);

  if (stage === 'create') return (<Redirect to="/create" />);

  if (stage === 'running') {
    return (
      <RoomsScreen
        rooms={rooms}
        createRoom={setCreate}
      />
    );
  }

  return (<Error message={errorMessage} />);
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);


mapStateToProps.propTypes = {
  state: RoomsStateType,
};

Rooms.propTypes = {
  rooms: PropTypes.arrayOf(RoomType).isRequired,
  stage: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  setRooms: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  setCreate: PropTypes.func.isRequired,
};
