/* eslint-disable comma-dangle */
import React from 'react';
import {
  render, wait, waitForElement, fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Redirect as MockRedirect } from 'react-router-dom';

import { CreateRoom } from '../src/containers/Rooms/CreateRoom';

// mock out Redirect so that we can assert on it
// eslint-disable-next-line no-undef
jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line no-undef
  Redirect: jest.fn(() => null),
}));


describe('Create Rooms', () => {
  it('insert lobby name, select board', async () => {
    const { getAllByTestId, getByTestId } = render(
      <CreateRoom setRunning={() => {}} />
    );


    const boardList = await waitForElement(
      () => getAllByTestId('board-name')
    );
    expect(boardList).toHaveLength(3);
    expect(getByTestId('button')).toBeDisabled();

    const roomInput = getByTestId('room-name');
    const input = { target: { value: 'Mi partida' } };
    fireEvent.change(roomInput, input);
    expect(roomInput.value).toEqual('Mi partida');

    const boardInput = getByTestId('board-select');
    const select = { target: { value: '2' } };
    fireEvent.change(boardInput, select);
    expect(boardInput.value).toEqual('2');

    expect(getByTestId('button')).toBeEnabled();
  });

  it('insert lobby, select board and redirect', async () => {
    const { getAllByTestId, getByTestId } = render(
      <CreateRoom setRunning={() => {}} />
    );

    await waitForElement(() => getAllByTestId('board-name'));
    const roomInput = getByTestId('room-name');
    const input = { target: { value: 'Mi partida' } };
    fireEvent.change(roomInput, input);

    const select = { target: { value: '2' } };
    fireEvent.change(getByTestId('board-select'), select);
    const button = getByTestId('button');
    fireEvent.click(button);

    await wait(() => {
      expect(MockRedirect).toHaveBeenCalledTimes(1);
    });

    // assert that our redirect was called with the correct path for redirection
    const redirect = '/waiting/1';
    expect(MockRedirect).toHaveBeenCalledWith({ to: redirect }, {});
  });
});
