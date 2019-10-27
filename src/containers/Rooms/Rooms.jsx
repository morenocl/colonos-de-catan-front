import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as dispatchObj from './Rooms.ducks';
import Error from '../../components/Error';
import RoomsScreen from '../../components/Rooms/Rooms';
import { getRooms } from '../../utils/Mock';
import { RoomType, RoomsStateType } from '../../utils/ApiTypes';
import useInterval from '../../utils/UseInterval';


const mapStateToProps = (state) => ({
  rooms: state.Rooms.rooms,
  stage: state.Rooms.stage,
});

export const Rooms = (props) => {
  const { rooms, stage } = props;
  const {
    setError, setRunning, setRooms, setCreate,
  } = props;

  const refresh = () => {
    if (stage !== 'frozen') {
      const onSuccess = (rs) => {
        setRunning();
        setRooms(rs.filter((r) => r && !r.game_has_started));
      };
      getRooms(onSuccess, setError);
    }
  };

  // Refresh every 5 seconds and when mounted.
  useEffect(refresh, []);
  useInterval(refresh, 5000);

  if (stage === 'empty') return (<></>);

  if (stage === 'error') return (<Error />);

  if (stage === 'create') return (<Redirect to="/create" />);

  return (
    <RoomsScreen
      rooms={rooms}
      onClick={setCreate}
    />
  );
};

export default connect(mapStateToProps, dispatchObj)(Rooms);


mapStateToProps.propTypes = {
  state: RoomsStateType,
};

Rooms.propTypes = {
  rooms: PropTypes.arrayOf(RoomType).isRequired,
  stage: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  setRooms: PropTypes.func.isRequired,
  setCreate: PropTypes.func.isRequired,
};
