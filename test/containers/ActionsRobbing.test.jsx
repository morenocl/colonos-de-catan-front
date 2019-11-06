import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useParams } from 'react-router-dom';

import showHCenter from '../../src/components/Board/ShowHCenter';
import {
  Robbing, mapStateToProps, mapDispatchToProps,
} from '../../src/containers/Actions/Robbing';
import {
  dispatchWaiting,
  dispatchError,
  dispatchRobberPayload,
} from '../../src/containers/Actions/Actions.ducks';
import {
  setRunning as dispatchGameRunning,
  setState as dispatchGameState,
} from '../../src/containers/Game/Game.ducks';
import { dispatchOnClick } from '../../src/containers/Info/Info.ducks';
import { colours } from '../../src/utils/Constants';
import { getGameStatus, moveRobber, playKnight } from '../../src/utils/Mock';


const setError = jest.fn(() => null);
const setWaiting = jest.fn(() => null);
const setGameRunning = jest.fn(() => null);
const setGameState = jest.fn(() => null);
const setRobberPayload = jest.fn(() => null);
const setInfoOnClick = jest.fn(() => null);
const dispatchs = [
  setError,
  setWaiting,
  setGameRunning,
  setGameState,
  setRobberPayload,
  setInfoOnClick,
];

jest.mock('../../src/components/Board/ShowHCenter', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

jest.mock('../../src/utils/Mock', () => ({
  getGameStatus: jest.fn(() => null),
  moveRobber: jest.fn(() => null),
  playKnight: jest.fn(() => null),
}));
const mockFns = [
  getGameStatus,
  moveRobber,
  playKnight,
];

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({ id: '1' })),
}));

afterEach(() => {
  dispatchs.forEach((f) => { f.mockClear(); });
  mockFns.forEach((f) => { f.mockClear(); });
  useParams.mockClear();
  showHCenter.mockClear();
});

const mk = (
  payload = [], position,
  type = 'move_robber', username,
) => render(
  <Robbing
    draw={{}}
    payload={payload}
    position={position}
    type={type}
    username={username}
    setError={setError}
    setWaiting={setWaiting}
    setGameRunning={setGameRunning}
    setGameState={setGameState}
    setRobberPayload={setRobberPayload}
    setInfoOnClick={setInfoOnClick}
  />,
);

test('returns draw, actionPayload and robberPayload ', () => {
  const position = { level: 1, index: 2 };
  const username = 'username';
  const payload = [
    { players: ['player'], position: { level: 2, index: 3 } },
  ];

  const state = {
    Board: { draw: {} },
    Game: { actions: [{ type: 'type', payload }] },
    Actions: { robberPayload: { position, username } },
  };
  const ownProps = {
    type: 'type',
  };
  const expected = {
    draw: {},
    payload,
    position,
    username,
  };

  expect(mapStateToProps(state, ownProps)).toStrictEqual(expected);
});

test('returns all dispatch functions', () => {
  const expected = {
    setError: dispatchError,
    setWaiting: dispatchWaiting,
    setGameRunning: dispatchGameRunning,
    setGameState: dispatchGameState,
    setRobberPayload: dispatchRobberPayload,
    setInfoOnClick: dispatchOnClick,
  };

  expect(mapDispatchToProps).toStrictEqual(expected);
});

test('shows its component', () => {
  const { queryAllByTestId } = mk();

  const components = queryAllByTestId('actions-robbing');
  expect(components.length).toBe(1);
});

test('shows available positions', () => {
  const { queryByTestId } = mk([]);

  // It should call useParams.
  expect(useParams).toHaveBeenCalledTimes(1);

  // It shouldn't call any of these.
  dispatchs.forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());

  // It should show available positions.
  expect(showHCenter).toHaveBeenCalledTimes(1);
  expect(showHCenter).toHaveBeenCalledWith({}, [], colours.building, expect.anything());
});

test('shows 0 available players', () => {
  const position = { level: 1, index: 2 };
  const payload = [ { players: [], position } ]
  const { queryByTestId } = mk(payload, position);

  // It should call useParams.
  expect(useParams).toHaveBeenCalledTimes(1);

  // It shouldn't call any of these.
  dispatchs.forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled;
});

test('shows 1 available player', () => {
  const position = { level: 1, index: 2 };
  const payload = [ { players: ['player'], position } ]
  const { queryByTestId } = mk(payload, position);

  // It should call useParams.
  expect(useParams).toHaveBeenCalledTimes(1);

  // It should set robberPayload.
  expect(setRobberPayload).toHaveBeenCalledTimes(1);
  expect(setRobberPayload).toHaveBeenCalledWith(position, 'player');

  // It shouldn't call any of these.
  dispatchs
    .filter((f) => f !== setRobberPayload)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled;
});

test('shows 3 available players', () => {
  const position = { level: 1, index: 2 };
  const payload = [ { players: ['0', '1', '2'], position } ]
  const { queryByTestId } = mk(payload, position);

  // It should call useParams.
  expect(useParams).toHaveBeenCalledTimes(1);

  // It should set InfoOnClick.
  expect(setInfoOnClick).toHaveBeenCalledTimes(1);

  // It shouldn't call any of these.
  dispatchs
    .filter((f) => f !== setInfoOnClick)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled;
});
