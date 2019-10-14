import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as dispatchObj from './Rooms.ducks';
import useInterval from '../../utils/useInterval';
import { getRooms } from '../../utils/Api';
import Error from '../../components/Error';
import RoomsScreen from '../../components/Rooms/Rooms';


const mapStateToProps = (state) => ({
  rooms: state.Rooms.rooms,
  stage: state.Rooms.stage,
});

export const Rooms = (props) => {
  const { rooms, stage } = props;
  const { setError, setRunning, setRooms } = props;

  const refresh = () => {
    if (stage !== 'frozen') {
      const onSuccess = (rs) => { setRunning(); setRooms(rs); };
      getRooms(onSuccess, setError);
    }
  };

  // Refresh every 5 seconds.
  useInterval(refresh, 5000);

  if (stage === 'empty') return (<></>);

  if (stage === 'error') return (<Error />);

  return (
    <RoomsScreen rooms={rooms} />
  );
};

export default connect(mapStateToProps, dispatchObj)(Rooms);


mapStateToProps.propTypes = {
  state: dispatchObj.stateType,
};

Rooms.propTypes = {
  rooms: PropTypes.arrayOf(dispatchObj.roomType).isRequired,
  stage: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  setRooms: PropTypes.func.isRequired,
};