import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useParams } from 'react-router-dom';

import {
  Game, mapStateToProps, mapDispatchToProps,
} from '../../src/containers/Game/Game'
import {
  setError as dispatchError,
  setRunning as dispatchRunning,
  setState as dispatchState,
} from '../../src/containers/Game/Game.ducks';
import { getGameStatus } from '../../src/utils/Api';
import useInterval from '../../src/utils/UseInterval';
import {
  info, actions, hand, hexes,
} from '../data/Game.ducks'


jest.mock('../../src/utils/Api', () => ({
  getGameStatus: jest.fn(() => null),
}));

jest.mock('../../src/utils/UseInterval', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({ id: '1' })),
}));

const setError = jest.fn(() => null);
const setRunning = jest.fn(() => null);
const setState = jest.fn(() => null);
const dispatchs = [setError, setRunning, setState];

afterEach(() => {
  dispatchs.forEach((f) => f.mockClear());
});

afterEach(() => {});

const mk = (stage) => render(
  <Game
    actions={actions}
    board={hexes}
    hand={hand}
    info={info}
    stage={stage}
    setError={setError}
    setRunning={setRunning}
    setState={setState}
  />
);


test('should have all dispatchs', () => {
  const expected = {
    setError: dispatchError,
    setRunning: dispatchRunning,
    setState: dispatchState,
  };

  expect(mapDispatchToProps).toStrictEqual(expected);
});

test('should have all props', () => {
  const state = {
    Game: {
      actions: actions,
      board: hexes,
      hand: hand,
      info: info,
      stage: 'running',
    }
  };
  const expected = {
    actions: state.Game.actions,
    board: state.Game.board,
    hand: state.Game.hand,
    info: state.Game.info,
    stage: state.Game.stage,
  };

  expect(mapStateToProps(state)).toStrictEqual(expected);
});

test('is empty', () => {
  const { queryAllByTestId } = mk('empty');

  const ps = queryAllByTestId('game-empty');
  expect(ps).toHaveLength(1);
  expect(ps[0]).toBeEmpty();
  expect(useParams).toHaveBeenCalledTimes(1);
  expect(useParams).not.toHaveBeenCalledWith(expect.anything());
  expect(useParams).toHaveReturnedTimes(1);

  expect(getGameStatus).toHaveBeenCalledTimes(1);
  expect(getGameStatus).toHaveBeenCalledWith('1', expect.any(Function), expect.any(Function));

  expect(useInterval).toHaveBeenCalledTimes(1);
  expect(useInterval).toHaveBeenCalledWith(expect.any(Function), 5000);

  const calledDispatchs = [setError, setRunning, setState];
  dispatchs
    .filter((f) => !calledDispatchs.includes(f))
    .forEach((f) => expect(f).not.toHaveBeenCalled());
});


test('show error', () => {
  const { queryAllByTestId } = mk('error');

  const ps = queryAllByTestId('error');
  expect(ps).toHaveLength(1);

  expect(getGameStatus).toHaveBeenCalledTimes(2);
  expect(getGameStatus).toHaveBeenCalledWith('1', expect.any(Function), expect.any(Function));

});











