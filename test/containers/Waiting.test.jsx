import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Redirect, useParams, Link } from 'react-router-dom';

import {
  Waiting, mapStateToProps, mapDispatchToProps,
} from '../../src/containers/Rooms/Waiting';
import { dispatchRoom, dispatchWaiting, dispatchLoading } from '../../src/containers/Rooms/Rooms.ducks';
import { getRoom, startGame } from '../../src/utils/Api';
import useInterval from '../../src/utils/UseInterval';


test('returns username, room and stage', () => {
  const username = 'username';
  const room = {
    id: 1,
    name: 'room',
    owner: 'owner',
    players: ['1', '2'],
    max_players: 4,
    game_has_started: false,
  };
  const stage = 'stage';
  const loading = false;
  const state = {
    Auth: { username },
    Rooms: { room, waitingStage: stage, createLoading: loading },
  };
  const expected = {
    username, room, stage, loading,
  };

  expect(mapStateToProps(state)).toStrictEqual(expected);
});

test('should have all dispatchs', () => {
  const expected = {
    setRoom: dispatchRoom,
    setStage: dispatchWaiting,
    setLoading: dispatchLoading,
  };

  expect(mapDispatchToProps).toStrictEqual(expected);
});

const setRoom = jest.fn(() => null);
const setStage = jest.fn(() => null);
const setLoading = jest.fn(() => null);
const dispatchs = [setRoom, setStage, setLoading];

const defaultRoom = {
  id: 1,
  name: 'room',
  owner: 'owner',
  players: ['1', '2'],
  max_players: 4,
  game_has_started: false,
};

const isFullRoom = {
  id: 1,
  name: 'room',
  owner: 'owner',
  players: ['1', '2', '3', '4'],
  max_players: 4,
  game_has_started: false,
};

const mk = (stage, username = '', room = defaultRoom) => render(
  <Waiting
    username={username}
    room={room}
    stage={stage}
    setRoom={setRoom}
    setStage={setStage}
    setLoading={setLoading}
  />,
);

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({ id: '1' })),
  Redirect: jest.fn(() => null),
  Link: jest.fn(() => null),
}));

jest.mock('../../src/utils/Api', () => ({
  getRoom: jest.fn(() => null),
  startGame: jest.fn(() => null),
}));

jest.mock('../../src/utils/UseInterval', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

const mockFns = [useParams, getRoom, startGame, useInterval, Redirect, Link];

afterEach(() => {
  dispatchs.forEach((f) => f.mockClear());
  mockFns.forEach((f) => f.mockClear());
});

test('is empty', () => {
  getRoom.mockImplementationOnce((id, onSuccess, onFailure) => {
    onFailure();
    expect(setStage).toHaveBeenCalledTimes(1);
    expect(setStage).toHaveBeenCalledWith('error');

    onSuccess(defaultRoom);
    expect(setRoom).toHaveBeenCalledTimes(1);
    expect(setRoom).toHaveBeenCalledWith(defaultRoom);
    expect(setStage).toHaveBeenCalledTimes(2);
    expect(setStage).toHaveBeenCalledWith('running');
  });

  const { queryAllByTestId } = mk('empty');

  const ps = queryAllByTestId('waiting-empty');
  expect(ps).toHaveLength(1);
  expect(ps[0]).toBeEmpty();

  expect(useParams).toHaveBeenCalledTimes(1);
  expect(useParams).not.toHaveBeenCalledWith(expect.anything());
  expect(useParams).toHaveReturnedTimes(1);

  expect(getRoom).toHaveBeenCalledTimes(1);
  expect(getRoom).toHaveBeenCalledWith('1', expect.any(Function), expect.any(Function));

  expect(useInterval).toHaveBeenCalledTimes(1);
  expect(useInterval).toHaveBeenCalledWith(expect.any(Function), 5000);

  const calledDispatchs = [setRoom, setStage, setLoading];
  dispatchs
    .filter((f) => !calledDispatchs.includes(f))
    .forEach((f) => expect(f).not.toHaveBeenCalled());
});

test('if the server returns 404 set stage to canceled', () => {
  getRoom.mockImplementationOnce((id, onSuccess, onFailure) => {
    onFailure(404);
    expect(setStage).toHaveBeenCalledTimes(1);
    expect(setStage).toHaveBeenCalledWith('canceled');
    expect(setLoading).toHaveBeenCalledTimes(1);
    expect(setLoading).toHaveBeenCalledWith(false);
  });

  mk('empty');

  expect(getRoom).toHaveBeenCalledTimes(1);
  expect(getRoom).toHaveBeenCalledWith('1', expect.any(Function), expect.any(Function));
});

test('if the stage is canceled redirect to rooms', () => {
  mk('canceled');

  expect(setStage).toHaveBeenCalledTimes(1);
  expect(setStage).toHaveBeenCalledWith('empty');
  expect(Redirect).toHaveBeenCalledTimes(1);
  expect(Redirect).toHaveBeenCalledWith({ to: '/rooms' }, {});
});

test('is running and I am the owner', () => {
  const { queryAllByTestId } = mk('running', 'owner');

  const ps = queryAllByTestId('waiting-running');
  expect(ps).toHaveLength(1);
  expect(ps[0]).not.toBeEmpty();
});

test('is running and I am not the owner', () => {
  const { queryAllByTestId } = mk('running', 'username');

  const ps = queryAllByTestId('waiting-running');
  expect(ps).toHaveLength(1);
  expect(ps[0]).not.toBeEmpty();

  const container = queryAllByTestId('waiting-buttons');
  expect(container).toHaveLength(0);
});

test('room is complete and StartGame button available', () => {
  const { queryAllByTestId } = mk('running', 'owner', isFullRoom);

  const ps = queryAllByTestId('waiting-running');
  expect(ps).toHaveLength(1);
  expect(ps[0]).not.toBeEmpty();

  const button = queryAllByTestId('start-button');
  expect(button).toHaveLength(1);
  expect(button[0]).toBeEnabled();
});

test('room is not complete and StartGame button disabled', () => {
  const { queryAllByTestId } = mk('running', 'owner');

  const ps = queryAllByTestId('waiting-running');
  expect(ps).toHaveLength(1);
  expect(ps[0]).not.toBeEmpty();

  const button = queryAllByTestId('start-button');
  expect(button).toHaveLength(1);
  expect(button[0]).toBeDisabled();
});

test('press start game button and loading message shows', () => {
  startGame.mockImplementationOnce((id, onSuccess, onFailure) => {
    onSuccess();
    expect(getRoom).toHaveBeenCalledTimes(2);
  });
  const { queryAllByTestId } = mk('running', 'owner', isFullRoom);
  const button = queryAllByTestId('start-button');
  expect(button).toHaveLength(1);
  expect(button[0]).toBeEnabled();

  fireEvent.click(button[0]);

  expect(startGame).toHaveBeenCalledTimes(1);
  expect(setLoading).toHaveBeenCalledTimes(1);
  expect(setLoading).toHaveBeenCalledWith(true);
});

test('shows an error', () => {
  const { queryAllByTestId } = mk('error');

  const ps = queryAllByTestId('error');
  expect(ps).toHaveLength(1);

  expect(getRoom).toHaveBeenCalledTimes(1);
  expect(getRoom).toHaveBeenCalledWith('1', expect.any(Function), expect.any(Function));
  expect(Link).toHaveBeenCalledTimes(1);
  expect(Link).toBeCalledWith(
    expect.objectContaining({
      to: '/rooms',
      children: expect.any(Object),
    }),
    expect.any(Object),
  );
  dispatchs
    .forEach((f) => expect(f).not.toHaveBeenCalled());
});

test('shows an error', () => {
  const { queryAllByTestId } = mk('not existent');

  const ps = queryAllByTestId('error');
  expect(ps).toHaveLength(1);

  expect(getRoom).toHaveBeenCalledTimes(1);
  expect(getRoom).toHaveBeenCalledWith('1', expect.any(Function), expect.any(Function));
  expect(Link).toHaveBeenCalledTimes(1);
  expect(Link).toBeCalledWith(
    expect.objectContaining({
      to: '/rooms',
      children: expect.any(Object),
    }),
    expect.any(Object),
  );

  dispatchs
    .forEach((f) => expect(f).not.toHaveBeenCalled());
});
