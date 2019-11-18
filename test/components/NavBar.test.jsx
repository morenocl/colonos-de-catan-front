import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import NavBar from '../../src/components/NavBar';

const logout = jest.fn(() => null);

const mk = (auth) => render(
    <MemoryRouter
	initialEntries={['/']}
	initialIndex={0}
    >
	<NavBar
	    auth={auth}
	    logout={logout}
	/>,
    </MemoryRouter>
);

afterEach(() => {
    logout.mockClear();
});

test('Shows redirect buttons', () => {
    const { queryAllByTestId, queryByTestId } = mk(true);

    const button = queryByTestId('nav-bar-logout-button');
    expect(button).toBeEnabled();

    fireEvent.click(button);
    expect(logout).toHaveBeenCalledTimes(1);
});

test('should show signup and login buttons', () => {
    const { queryAllByTestId, queryByTestId } = mk(false);

    expect(queryAllByTestId('nav-bar-login-button').length).toBe(1);
    expect(queryAllByTestId('nav-bar-signup-button').length).toBe(1);
});
