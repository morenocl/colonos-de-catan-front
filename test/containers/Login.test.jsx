import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Redirect } from 'react-router-dom';

import { Login, mapDispatchToProps } from '../../src/containers/Login';
import {
  setAuth as dispatchAuth,
  setUser as dispatchUser,
} from '../../src/containers/Auth.ducks';
import { login } from '../../src/utils/Mock';
import useForm from '../../src/containers/UseForm';

jest.mock('react-router-dom', () => ({
  Redirect: jest.fn(() => null),
}));

jest.mock('../../src/utils/Mock', () => ({
  login: jest.fn(() => null),
}));

jest.mock('../../src/containers/UseForm', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

const setError = jest.fn(() => null);
const setLoading = jest.fn(() => null);
const setAuth = jest.fn(() => null);
const setUser = jest.fn(() => null);

const dispatchs = [setError, setLoading, setAuth, setUser];
const mockFns = [Redirect, login, useForm];

afterEach(() => {
  dispatchs.forEach((f) => f.mockClear());
  mockFns.forEach((f) => f.mockClear());
});


const mk = () => render(
  <Login
    setAuth={setAuth}
    setUser={setUser}
  />,
);

test('returns all dispatch functions', () => {
  const expected = {
    setAuth: dispatchAuth,
    setUser: dispatchUser,
  };
  expect(mapDispatchToProps).toEqual(expected);
});

test('render and Form is load', () => {
  useForm.mockImplementationOnce((validateUsername, validatePassword) => {
    validateUsername();
    validatePassword();
    return {
      changeUsername: null,
      changePassword: null,
      validate: (() => true),
      values: {},
    };
  });
  const { queryAllByTestId, queryByTestId } = mk();

  expect(queryAllByTestId('login-form').length).toBe(1);
  const form = queryByTestId('login-form');
  expect(form).not.toBeEmpty();

  expect(useForm).toHaveBeenCalledTimes(1);
});

xtest('render the form without successful login', async () => {
  const { getByLabelText, getByTestId, getByRole } = renderWithRedux(<Login />);

  expect(getByTestId('button')).toBeDisabled();

  // fill out the form
  fireEvent.change(getByLabelText(/username/i), { target: { value: 'test' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'test' } });

  expect(getByTestId('button')).toBeEnabled();

  fireEvent.click(getByTestId('button'));

  const alert = await waitForElement(
    () => getByRole('alert'),
  );
  expect(alert).toHaveTextContent(/error/i);
  expect(localStorage.getItem('token')).toEqual(null);
});
