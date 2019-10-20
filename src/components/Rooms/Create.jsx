import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import PropTypes from 'prop-types';
import Error from '../Error';

import { BoardListType } from '../../utils/ApiTypes';

const Create = (props) => {
  const {
    boards, roomName, loading, error, roomNameError, boardIdError,
    handleSubmit, changeRoomName, changeBoardId, validate,
  } = props;

  const nameForm = (
    <FormGroup bssize="large">
      <FormLabel>
        Room name
      </FormLabel>
      <FormControl
        autoFocus
        name="name"
        type="text"
        value={roomName}
        isInvalid={!!roomNameError}
        onChange={changeRoomName}
      />
      <FormControl.Feedback type="invalid">
        {roomNameError}
      </FormControl.Feedback>
    </FormGroup>
  );

  const options = boards.map((board) => (
    <option
      key={board.id}
      value={board.id}
    >
      {board.name}
    </option>
  ));

  const selectForm = (
    <FormGroup>
      <FormLabel>Select Board</FormLabel>
      <FormControl
        as="select"
        onChange={changeBoardId}
        isInvalid={!!boardIdError}
      >
        {options}
      </FormControl>
      <FormControl.Feedback type="invalid">
        {boardIdError}
      </FormControl.Feedback>
    </FormGroup>
  );

  const button = (
    <Button
      block
      bssize="large"
      disabled={!validate()}
      type="submit"
    >
      {loading ? 'Loading...' : 'Create Room'}
    </Button>
  );

  return (
    <div className="Login">
      <h1>Create Room</h1>
      {error && <Error message={error} />}
      <form onSubmit={handleSubmit}>
        {nameForm}
        {selectForm}
        {button}
      </form>
    </div>
  );
};

export default Create;

Create.propTypes = {
  boards: PropTypes.arrayOf(BoardListType).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  roomNameError: PropTypes.string.isRequired,
  boardIdError: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  changeRoomName: PropTypes.func.isRequired,
  changeBoardId: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};
