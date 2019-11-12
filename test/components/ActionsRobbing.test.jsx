import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Robbing from '../../src/components/Actions/Robbing';


const onCancel = jest.fn(() => null);
const onConfirm = jest.fn(() => null);

const mk = (message) => render(
  <Robbing
    message={message}
    onCancel={onCancel}
    onConfirm={onConfirm}
  />,
);

afterEach(() => {
  onCancel.mockClear();
  onConfirm.mockClear();
});

test('shows a title and two buttons', () => {
  const { queryAllByTestId } = mk('message');

  const component = queryAllByTestId('actions-robbing');
  const head = queryAllByTestId('actions-robbing-head');
  const bConfirm = queryAllByTestId('actions-robbing-confirm');
  const bCancel = queryAllByTestId('actions-robbing-cancel');

  // It should show one component and one button of each.
  expect(component).toHaveLength(1);
  expect(component[0]).not.toBeEmpty();

  expect(head).toHaveLength(1);
  expect(head[0]).not.toBeEmpty();

  expect(bCancel).toHaveLength(1);
  expect(bCancel[0]).not.toBeEmpty();

  expect(bConfirm).toHaveLength(1);
  expect(bConfirm[0]).not.toBeEmpty();

  // It should show two enabled buttons.
  expect(bCancel[0]).toBeEnabled();
  expect(bConfirm[0]).toBeEnabled();

  const expected = /^message$/i;
  expect(head[0]).toHaveTextContent(expected);
});

test('calls onCancel', () => {
  const { queryByTestId } = mk('');

  const b = queryByTestId('actions-robbing-cancel');

  expect(onCancel).not.toHaveBeenCalled();
  expect(onConfirm).not.toHaveBeenCalled();

  fireEvent.click(b);

  expect(onCancel).toHaveBeenCalledTimes(1);
  expect(onConfirm).not.toHaveBeenCalled();
});

test('calls onCofirm', () => {
  const { queryByTestId } = mk('');

  const b = queryByTestId('actions-robbing-confirm');

  expect(onCancel).not.toHaveBeenCalled();
  expect(onConfirm).not.toHaveBeenCalled();

  fireEvent.click(b);

  expect(onConfirm).toHaveBeenCalledTimes(1);
  expect(onCancel).not.toHaveBeenCalled();
});
