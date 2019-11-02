import React from 'react';
import {
  render, wait, waitForElement, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Body } from '../../src/containers/Rooms/Body';
import BodyScreen from '../../src/components/Rooms/Body';
import { rooms } from '../../src/utils/RoomData'


const mk = (props) => render(
  <Body
    id={props.id}
    owner={props.owner}
    players={props.players}
    maxPlayers={props.max_players}
    gameHasStarted={props.game_has_started}
    username="test"
  />
);

/* When body is mounted */
test('renders without crashing', () => {
  const { queryAllByTestId } = mk(rooms[0]);
  const bodies = queryAllByTestId('room-body');

  // It should render one body.
  expect(bodies.length).toBe(1);

  // It should render without crashing.
  expect(bodies[0]).toBeInTheDocument();
  expect(bodies[0]).not.toBeEmpty();

  // It should have one button.
  expect(queryAllByTestId('room-body-button').length).toBe(1);
});

/* When user is not the owner
 * And room is not full
 * And user is not joined
 * And game has not started */
test('is be able to join', () => {
  const { queryByTestId } = mk(rooms[0]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to join.
  expect(button).toHaveTextContent('Join');
});

/* When user is not the owner
 * And room is not full
 * And user is not joined
 * And game has started */
test('is not be able to join or enter', () => {
  const { queryAllByTestId } = mk(rooms[1]);

  // It should not have a button.
  expect(queryAllByTestId('room-body-button').length).toBe(0);
});

/* When user is not the owner
 * And room is full
 * And user is not joined
 * And game has not started */
test('is not be able to join or enter', () => {
  const { queryAllByTestId } = mk(rooms[2]);

  // It should not have a button.
  expect(queryAllByTestId('room-body-button').length).toBe(0);
});

/* When user is not the owner
 * And room is full
 * And user is not joined
 * And game has started */
test('is not be able to join or enter', () => {
  const { queryAllByTestId } = mk(rooms[3]);

  // It should not have a button.
  expect(queryAllByTestId('room-body-button').length).toBe(0);
});

/* When user is not the owner
 * And room is not full
 * And user is joined
 * And game has not started */
test('is able to enter', () => {
  const { queryByTestId } = mk(rooms[4]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to enter.
  expect(button).toHaveTextContent('Enter');
});

/* When user is not the owner
 * And room is not full
 * And user is joined
 * And game has started */
test('is able to enter', () => {
  const { queryByTestId } = mk(rooms[5]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to enter.
  expect(button).toHaveTextContent('Enter');
});

/* When user is not the owner
 * And room is full
 * And user is joined
 * And game has not started */
test('is able to enter', () => {
  const { queryByTestId } = mk(rooms[6]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to enter.
  expect(button).toHaveTextContent('Enter');
});

/* When user is not the owner
 * And room is not full
 * And user is joined
 * And game has started */
test('is able to enter', () => {
  const { queryByTestId } = mk(rooms[7]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to enter.
  expect(button).toHaveTextContent('Enter');
});

/* When user is the owner
 * And room is not full
 * And user is joined
 * And game has not started */
test('is able to enter', () => {
  const { queryByTestId } = mk(rooms[8]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to enter.
  expect(button).toHaveTextContent('Enter');
});

/* When user is the owner
 * And room is not full
 * And user is joined
 * And game has started */
test('is able to enter', () => {
  const { queryByTestId } = mk(rooms[9]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to enter.
  expect(button).toHaveTextContent('Enter');
});

/* When user is the owner
 * And room is full
 * And user is joined
 * And game has not started */
test('is able to enter', () => {
  const { queryByTestId } = mk(rooms[10]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to enter.
  expect(button).toHaveTextContent('Enter');
});

/* When user is the owner
 * And room is full
 * And user is joined
 * And game has started */
test('is able to enter', () => {
  const { queryByTestId } = mk(rooms[9]);
  const button = queryByTestId('room-body-button');

  // It should be enabled.
  expect(button).toBeEnabled();

  // User should be able to enter.
  expect(button).toHaveTextContent('Enter');
});
