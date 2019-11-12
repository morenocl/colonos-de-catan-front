import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useParams } from 'react-router-dom';

import showEdges from '../../src/components/Board/ShowEdges';
import {
  Roads, mapStateToProps, mapDispatchToProps,
} from '../../src/containers/Actions/Roads';
import {
  dispatchWaiting,
  dispatchError,
  dispatch2RoadsPayload,
} from '../../src/containers/Actions/Actions.ducks';
import {
  setRunning as dispatchGameRunning,
  setState as dispatchGameState,
} from '../../src/containers/Game/Game.ducks';
import { colours } from '../../src/utils/Constants';
import { getGameStatus, play2Roads } from '../../src/utils/Mock';


const setError = jest.fn(() => null);
const setWaiting = jest.fn(() => null);
const setGameRunning = jest.fn(() => null);
const setGameState = jest.fn(() => null);
const set2RoadsPayload = jest.fn(() => null);
const dispatchs = [
  setError,
  setWaiting,
  setGameRunning,
  setGameState,
  set2RoadsPayload,
];

jest.mock('../../src/components/Board/ShowEdges', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

jest.mock('../../src/utils/Mock', () => ({
  getGameStatus: jest.fn(() => null),
  play2Roads: jest.fn(() => null),
}));

const mockFns = [
  getGameStatus,
  play2Roads,
];

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({ id: '1' })),
}));

afterEach(() => {
  dispatchs.forEach((f) => { f.mockClear(); });
  mockFns.forEach((f) => { f.mockClear(); });
  useParams.mockClear();
  showEdges.mockClear();
});

const mk = (
  payload = [], p0, p1,
) => render(
  <Roads
    draw={{}}
    payload={payload}
    p0={p0}
    p1={p1}
    setError={setError}
    setWaiting={setWaiting}
    setGameRunning={setGameRunning}
    setGameState={setGameState}
    set2RoadsPayload={set2RoadsPayload}
  />,
);

test('returns draw, actionPayload and robberPayload ', () => {
  const p0 = { level: 1, index: 2 };
  const p1 = { level: 1, index: 1 };
  const payload = [{ level: 2, index: 1 }];

  const state = {
    Board: { draw: {} },
    Game: { actions: [{ type: 'play_road_building_card', payload }] },
    Actions: { roadsPayload: { p0, p1 } },
  };
  const expected = {
    draw: {},
    payload,
    p0,
    p1,
  };

  expect(mapStateToProps(state)).toStrictEqual(expected);
});

test('returns all dispatch functions', () => {
  const expected = {
    setError: dispatchError,
    setWaiting: dispatchWaiting,
    setGameRunning: dispatchGameRunning,
    setGameState: dispatchGameState,
    set2RoadsPayload: dispatch2RoadsPayload,
  };

  expect(mapDispatchToProps).toStrictEqual(expected);
});

test('shows its component', () => {
  const { queryAllByTestId } = mk();

  const components = queryAllByTestId('actions-positioning');
  expect(components).toHaveLength(1);
});

test('shows available positions', () => {
  showEdges.mockImplementationOnce((draw, ps, colour, onClickMaker) => {
    const p0 = { level: 0, index: 0 };
    onClickMaker(p0)();
    expect(set2RoadsPayload).toHaveBeenCalledTimes(1);
    expect(set2RoadsPayload).toHaveBeenCalledWith(p0, null);
  });

  mk([]);

  // It should call useParams.
  expect(useParams).toHaveBeenCalledTimes(1);
  expect(useParams).not.toHaveBeenCalledWith(expect.anything());

  // It shouldn't call any of these.
  dispatchs
    .filter((f) => f !== set2RoadsPayload)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());

  // It should show available positions.
  expect(showEdges).toHaveBeenCalledTimes(1);
  expect(showEdges).toHaveBeenCalledWith({}, [], colours.building, expect.any(Function));
});

test('shows available positions and a chosen one', () => {
  const p0 = { level: 1, index: 1 };

  showEdges.mockImplementationOnce((draw, ps, colour, onClickMaker) => {
    const p1 = { level: 0, index: 0 };
    onClickMaker(p1)();
    expect(set2RoadsPayload).toHaveBeenCalledTimes(1);
    expect(set2RoadsPayload).toHaveBeenCalledWith(p0, p1);
  });

  mk([], p0);

  // It should call useParams.
  expect(useParams).toHaveBeenCalledTimes(1);
  expect(useParams).not.toHaveBeenCalledWith(expect.anything());

  // It shouldn't call any of these.
  dispatchs
    .filter((f) => f !== set2RoadsPayload)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());

  // It should show available positions.
  expect(showEdges).toHaveBeenCalledTimes(2);
  expect(showEdges)
    .toHaveBeenNthCalledWith(1, {}, [], colours.building, expect.any(Function));
  expect(showEdges)
    .toHaveBeenNthCalledWith(2, {}, [p0], colours.chosen, expect.any(Function));
});

/*
test('shows 0 available players', () => {
  const position = { level: 1, index: 2 };
  const payload = [{ players: [], position }];
  mk(payload, position);

  // It should call useParams.
  expect(useParams).toHaveBeenCalledTimes(1);
  expect(useParams).not.toHaveBeenCalledWith(expect.anything());

  // It shouldn't call any of these.
  dispatchs.forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled();
});

test('shows 1 available player', () => {
  const position = { level: 1, index: 2 };
  const payload = [{ players: ['player'], position }];
  mk(payload, position);

  // It should call useParams.
  expect(useParams).toHaveBeenCalledTimes(1);
  expect(useParams).not.toHaveBeenCalledWith(expect.anything());

  // It should set robberPayload.
  expect(setRobberPayload).toHaveBeenCalledTimes(1);
  expect(setRobberPayload).toHaveBeenCalledWith(position, 'player');

  // It shouldn't call any of these.
  dispatchs
    .filter((f) => f !== setRobberPayload)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled();
});

test('shows 3 available players', () => {
  const players = ['0', '1', '2'];
  const position = { level: 1, index: 2 };
  const payload = [{ players, position }];

  setInfoOnClick.mockImplementationOnce((onClickMaker) => {
    const wrongPlayers = ['user', 'username', 'test', '', 1];

    // It should call setInfoOnClick with an onClick maker function.
    players.forEach((username) => {
      const n = setRobberPayload.mock.calls.length;
      // It should call setRobberPayload.
      onClickMaker(username)();
      expect(setRobberPayload).toHaveBeenCalledTimes(n + 1);
      expect(setRobberPayload).toHaveBeenCalledWith(position, username);
    });

    setRobberPayload.mockClear();

    // It should do nothing.
    wrongPlayers.forEach((username) => {
      expect(onClickMaker(username)).toBe(null);
      expect(setRobberPayload).not.toHaveBeenCalled();
      expect(setRobberPayload).not.toHaveBeenCalledWith(expect.anything());
    });
  });

  const { queryByTestId } = mk(payload, position);

  // It should force user selection.
  expect(queryByTestId('actions-robbing-confirm')).toBeDisabled();

  // It should set InfoOnClick.
  expect(setInfoOnClick).toHaveBeenCalledTimes(1);
  expect(setInfoOnClick).toHaveBeenCalledWith(expect.any(Function));

  // It shouldn't call any of these.
  dispatchs
    .filter((f) => f !== setInfoOnClick)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled();
});

test('calls no functions', () => {
  const position = { level: 1, index: 2 };
  mk([], position, 'username');

  // It shouldn't call any of these just yet.
  dispatchs.forEach((f) => expect(f).not.toHaveBeenCalled());
  mockFns.forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled();
});

test('calls setInfoOnClick and moveRobber', () => {
  const position = { level: 1, index: 2 };
  const { queryByTestId } = mk([], position, 'username');

  fireEvent.click(queryByTestId('actions-robbing-confirm'));

  // It should unset InfoOnClick.
  expect(setInfoOnClick).toHaveBeenCalledTimes(1);
  expect(setInfoOnClick).toHaveBeenCalledWith(expect.any(Function));

  expect(moveRobber).toHaveBeenCalledTimes(1);
  expect(moveRobber).toHaveBeenCalledWith(
    '1', position, 'username', expect.any(Function), expect.any(Function),
  );

  // It shouldn't call any of these.
  dispatchs
    .filter((f) => f !== setInfoOnClick)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled();
  mockFns
    .filter((f) => f !== moveRobber)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
});

test('calls setInfoOnClick and playKnight', () => {
  const position = { level: 1, index: 2 };
  const { queryByTestId } = mk([], position, 'username', 'play_knight_card');

  fireEvent.click(queryByTestId('actions-robbing-confirm'));

  // It should unset InfoOnClick.
  expect(setInfoOnClick).toHaveBeenCalledTimes(1);
  expect(setInfoOnClick).toHaveBeenCalledWith(expect.any(Function));

  expect(playKnight).toHaveBeenCalledTimes(1);
  expect(playKnight).toHaveBeenCalledWith(
    '1', position, 'username', expect.any(Function), expect.any(Function),
  );

  // It shouldn't call any of these.
  dispatchs
    .filter((f) => f !== setInfoOnClick)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled();
  mockFns
    .filter((f) => f !== playKnight)
    .forEach((f) => expect(f).not.toHaveBeenCalled());
});

test('calls refresh on confirm', () => {
  const fun = (id, position, username, onSuccess) => {
    onSuccess();
  };
  moveRobber.mockImplementationOnce(fun);

  const position = { level: 1, index: 2 };
  const { queryByTestId } = mk([], position, 'username');

  fireEvent.click(queryByTestId('actions-robbing-confirm'));

  // It should refresh.
  expect(setWaiting).toHaveBeenCalledTimes(1);
  expect(setWaiting).not.toHaveBeenCalledWith(expect.anything());
  expect(setGameRunning).toHaveBeenCalledTimes(1);
  expect(setGameRunning).not.toHaveBeenCalledWith(expect.anything());
  expect(getGameStatus).toHaveBeenCalledTimes(1);
  expect(getGameStatus).toHaveBeenCalledWith('1', setGameState, setError);

  // It shouldn't call any of these.
  const calledDispatchs = [setInfoOnClick, setWaiting, setGameRunning];
  const calledMocks = [moveRobber, getGameStatus];
  dispatchs
    .filter((f) => !calledDispatchs.includes(f))
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled();
  mockFns
    .filter((f) => !calledMocks.includes(f))
    .forEach((f) => expect(f).not.toHaveBeenCalled());
});

test('calls refresh on cancel', () => {
  const fun = (id, position, username, onSuccess) => {
    onSuccess();
  };
  moveRobber.mockImplementationOnce(fun);

  const position = { level: 1, index: 2 };
  const { queryByTestId } = mk([], position, 'username');

  fireEvent.click(queryByTestId('actions-robbing-cancel'));

  // It should refresh.
  expect(setWaiting).toHaveBeenCalledTimes(1);
  expect(setWaiting).not.toHaveBeenCalledWith(expect.anything());
  expect(setGameRunning).toHaveBeenCalledTimes(1);
  expect(setWaiting).not.toHaveBeenCalledWith(expect.anything());
  expect(getGameStatus).toHaveBeenCalledTimes(1);
  expect(getGameStatus).toHaveBeenCalledWith('1', setGameState, setError);
  expect(setInfoOnClick).toHaveBeenCalledTimes(1);
  expect(setInfoOnClick).toHaveBeenCalledWith(expect.any(Function));

  // It shouldn't call any of these.
  const calledDispatchs = [setWaiting, setGameRunning, setInfoOnClick];
  const calledMocks = [getGameStatus];
  dispatchs
    .filter((f) => !calledDispatchs.includes(f))
    .forEach((f) => expect(f).not.toHaveBeenCalled());
  expect(showHCenter).not.toHaveBeenCalled();
  mockFns
    .filter((f) => !calledMocks.includes(f))
    .forEach((f) => expect(f).not.toHaveBeenCalled());
});
*/
