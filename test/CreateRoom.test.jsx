import React from 'react';
import {
  render, wait, waitForElement, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Redirect } from 'react-router-dom';
import { createRoom, getBoards } from '../src/utils/Api';
import { CreateRoom, mapDispatchToProps } from '../src/containers/Rooms/CreateRoom';
import { dispatchRunning } from '../src/containers/Rooms/Rooms.ducks';

// mock out Redirect so that we can assert on it
jest.mock('react-router-dom', () => ({
  Redirect: jest.fn(() => null),
}));

jest.mock('../src/utils/Api', () => ({
  getBoards: jest.fn(() => null),
  createRoom: jest.fn(() => null),
}));

const setRunning = jest.fn(() => null);
const dispatchs = [setRunning];
const mockFns = [getBoards, Redirect];

afterEach(() => {
  dispatchs.forEach((f) => f.mockClear());
  mockFns.forEach((f) => f.mockClear());
});

const defaultBoards = [
  { id: 1, name: 'board1' },
  { id: 2, name: 'board2' },
  { id: 3, name: 'board3' },
];

const defaultRoom = {
  id: 1,
  name: 'room',
  owner: 'owner',
  players: ['1', '2'],
  max_players: 4,
  game_has_started: false,
};

getBoards.mockImplementation((onSuccess, onFailure) => {
  onSuccess(defaultBoards);
});

test('should have all dispatchs', () => {
  const expected = {
    setRunning: dispatchRunning,
  };

  expect(mapDispatchToProps).toStrictEqual(expected);
});

test('insert lobby name, select board', async () => {
  const { getAllByTestId, getByTestId } = render(
    <CreateRoom setRunning={setRunning} />,
  );

  const boardList = await waitForElement(
    () => getAllByTestId('board-name'),
  );
  expect(boardList).toHaveLength(3);
  expect(getByTestId('button')).toBeDisabled();

  const roomInput = getByTestId('room-name');
  const input = { target: { value: defaultRoom.name } };
  fireEvent.change(roomInput, input);
  expect(roomInput.value).toEqual(defaultRoom.name);

  const boardInput = getByTestId('board-select');
  const select = { target: { value: defaultBoards[1].id } };
  fireEvent.change(boardInput, select);
  expect(parseInt(boardInput.value)).toEqual(defaultBoards[1].id);

  expect(getByTestId('button')).toBeEnabled();
});

test('insert lobby, select board and redirect', async () => {
  createRoom.mockImplementationOnce((roomName, boardId, onSuccess, onFailure) => {
    onSuccess(defaultRoom);
    expect(setRunning).toHaveBeenCalledTimes(1);
  });
  const { getAllByTestId, getByTestId } = render(
    <CreateRoom setRunning={setRunning} />,
  );

  await waitForElement(() => getAllByTestId('board-name'));
  const roomInput = getByTestId('room-name');
  const input = { target: { value: defaultRoom.name } };
  fireEvent.change(roomInput, input);

  const select = { target: { value: defaultBoards[1].id } };
  fireEvent.change(getByTestId('board-select'), select);
  const button = getByTestId('button');
  fireEvent.click(button);

  await wait(() => {
    expect(Redirect).toHaveBeenCalledTimes(1);
  });

  // assert that our redirect was called with the correct path for redirection
  const redirect = `/waiting/${defaultRoom.id}`;
  expect(Redirect).toHaveBeenCalledWith({ to: redirect }, {});
});
