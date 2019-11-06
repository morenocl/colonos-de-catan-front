import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import reducer, { initialState, setAuth, setUser } from '../../src/containers/Auth.ducks';
import Login from '../../src/containers/Login';


function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

test('can render with redux with defaults', () => {
  expect(setAuth(false)).toEqual({
    type: 'app/SET_AUTH',
    payload: false,
  });

  expect(setUser(null)).toEqual({
    type: 'app/SET_USERNAME',
    payload: null,
  });
});

test('render the form without successful login', async () => {
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
