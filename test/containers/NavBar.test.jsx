import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import {NavBar} from '../../src/containers/NavBar';

const setAuth = jest.fn(() => null);
const setUser = jest.fn(() => null);

const mk = (auth) => render(
    <MemoryRouter
	initialEntries={['/waiting/1']}
	initialIndex={0}
    >
	<NavBar
	    auth={auth}
	    setAuth={setAuth}
	    setUser={setUser}
	/>
    </MemoryRouter>
)

test('Resets the user on logout click', () => {
    const { queryAllByTestId, queryByTestId } = mk(true);

    const logoutButton = queryByTestId('nav-bar-logout-button');
    fireEvent.click(logoutButton)

    expect(setAuth).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledTimes(1);
});
