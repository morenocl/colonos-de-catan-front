import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ownerContainer, notOwnerContainer } from '../data/Waiting.ducks';
import { Waiting } from '../../src/containers/Rooms/Waiting';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

const mk = (container) => shallow(
  <MemoryRouter
    initialEntries={['/waiting/1']}
    initialIndex={0}
  >
    <Waiting {...container} />
  </MemoryRouter>,
);

describe('Waiting body', () => {
  it('should show room info and disabled buttons', () => {
    const ws = mk(notOwnerContainer).dive().dive();
    const expected = <Waiting {...notOwnerContainer} />;
    expect(ws.matchesElement(expected), ws.debug()).to.be.true;
  });

  it('should show room info and enabled buttons', () => {
    const ws = mk(ownerContainer).dive().dive();
    const expected = <Waiting {...ownerContainer} />;
    expect(ws.matchesElement(expected), ws.debug()).to.be.true;
  });
});
