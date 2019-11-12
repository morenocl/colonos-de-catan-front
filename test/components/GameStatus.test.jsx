import React from 'react';
import { render } from '@testing-library/react';
import GameStatus from '../../src/components/Info/GameStatus';
import { Info } from '../../src/containers/Info/Info';
import { info } from '../../src/utils/BoardData';

let { winner } = Info;
const { currentTurn } = info;

test('render GameStatus with no winner', () => {
  const { queryAllByTestId } = render(<GameStatus turn={currentTurn} winner={winner} />);
  const dice = queryAllByTestId('dice');
  const tdWinner = queryAllByTestId('winner');
  expect(dice.length).toBe(1);
  expect(dice[0].textContent).toEqual(`${currentTurn.dice[0]}, ${currentTurn.dice[1]}`);
  expect(tdWinner).toHaveLength(0);
});

test('render GameStatus with one winner', () => {
  winner = 'user01';
  const { queryAllByTestId } = render(<GameStatus turn={currentTurn} winner={winner} />);
  const td = queryAllByTestId('winner');
  const tdTurn = queryAllByTestId('turn-user');
  const tdDice = queryAllByTestId('dice');
  expect(td.length).toBe(1);
  expect(tdTurn).toHaveLength(0);
  expect(tdDice).toHaveLength(0);
});
