import React from 'react';
import { render } from '@testing-library/react';
import { Info, mapStateToProps } from '../../src/containers/Info/Info';
import { dispatchOnClick } from '../../src/containers/Info/Info.ducks';
import { info } from '../../src/utils/BoardData';
import '@testing-library/jest-dom/extend-expect';

const { players, currentTurn } = info;

const playerOnClick = () => ((player) => (() => {
  console.log(`Clicked by:${player.username}`);
}));

test('should show previously rolled value', () => {
  const initialState = {
    Game: {
      info: {
        players,
        currentTurn,
      },
    },
    Info: {
      playerOnClick,
    },
  };

  expect(mapStateToProps(initialState).players).toEqual(players);
});

test('should dispatch ROLL_DICE action', () => {
  expect(dispatchOnClick(playerOnClick)).toEqual({
    type: 'info/SET_CLICK',
    payload: { playerOnClick },
  });
});

test('render one card for player', () => {
  const { queryAllByTestId } = render(
    <Info
      players={players}
      turn={currentTurn}
      playerOnClick={playerOnClick}
    />,
  );
  const cards = queryAllByTestId('card');
  expect(cards.length).toBe(players.length);
});

test('render player in turn', () => {
  const { getByTestId } = render(
    <Info
      players={players}
      turn={currentTurn}
      playerOnClick={playerOnClick}
    />,
  );
  const td = getByTestId('turn-user');
  expect(td).toHaveTextContent(currentTurn.user);
});

test('render the winning player', () => {
  const winner = 'user3';
  const { getByTestId } = render(
    <Info
      players={players}
      turn={currentTurn}
      winner={winner}
      playerOnClick={playerOnClick}
    />,
  );
  const td = getByTestId('winner');
  expect(td).toHaveTextContent(winner);
});

test('player in turn should have font-weight', () => {
  const { queryAllByTestId } = render(
    <Info
      players={players}
      turn={currentTurn}
      playerOnClick={playerOnClick}
    />,
  );

  const cards = queryAllByTestId('card');
  cards.forEach((card) => {
    const user = card.querySelector('div button').textContent.substring(7);
    if (user === currentTurn.user) {
      expect(card).toHaveStyle('font-weight: bold');
    } else {
      expect(card).toHaveStyle('font-weight: normal');
      expect(card).toHaveStyle('background-color: white');
    }
  });
});
