import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateScreen from '../../components/Rooms/CreateRoom';
import { getBoards, createRoom } from '../../utils/Mock';
import { setRunning as dispatchRunning } from './Rooms.ducks';


const initialState = {
  roomName: '',
  boardId: '',
  roomNameValid: false,
  roomNameError: '',
  boardIdValid: false,
  boardIdError: '',
  loading: false,

};

const mapDispatchToProps = ({
  setRunning: dispatchRunning,
});

const CreateRoom = ({ setRunning }) => {
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState('');
  const [response, setResponse] = useState(undefined);
  const [formData, setFormData] = useState(initialState);

  const onSuccess = (res) => { setBoards(res); };
  const onFailure = () => {
    setError('Connection error, the boards could not be obtained');
  };

  useEffect(() => {
    getBoards(onSuccess, onFailure);
  }, []);

  // Handles roomName changes.
  const changeRoomName = (e) => {
    let roomName = e.target.value;
    let valid = true;
    // eslint-disable-next-line no-shadow
    let error = '';

    if (!roomName) {
      roomName = '';
      valid = false;
      error = 'This field is required';
    } else if (roomName.length < 4) {
      valid = false;
      error = 'Please enter at leaset 4 characters';
    }

    setFormData({
      ...formData,
      roomName,
      roomNameValid: valid,
      roomNameError: error,
    });
  };

  // Handles boardId changes.
  const changeBoardId = (e) => {
    let boardId = e.target.value;
    let valid = true;
    // eslint-disable-next-line no-shadow
    let error = '';

    if (!boardId) {
      boardId = '';
      valid = false;
      error = 'Choose a board is required';
    }

    setFormData({
      ...formData,
      boardId,
      boardIdValid: valid,
      boardIdError: error,
    });
  };


  // Send data via API.
  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-shadow
    const onSuccess = (res) => {
      const path = `/waiting/${res.id}`;
      setResponse(<Redirect to={path} />);
      setRunning();
    };

    // eslint-disable-next-line no-shadow
    const onFailure = (error) => {
      setError(error.message);
    };

    const { roomName, boardId } = formData;
    createRoom(roomName, boardId, onSuccess, onFailure);
  };

  const validate = () => {
    const { roomNameValid, boardIdValid } = formData;
    return (roomNameValid && boardIdValid);
  };

  const {
    roomName, roomNameError, boardIdError, loading,
  } = formData;

  return (
    response
    || (
      <CreateScreen
        boards={boards}
        loading={loading}
        error={error}
        roomName={roomName}
        roomNameError={roomNameError}
        boardIdError={boardIdError}
        handleSubmit={handleSubmit}
        changeRoomName={changeRoomName}
        changeBoardId={changeBoardId}
        validate={validate}
      />
    )
  );
};

export default connect(null, mapDispatchToProps)(CreateRoom);


CreateRoom.propTypes = {
  setRunning: PropTypes.func.isRequired,
};
