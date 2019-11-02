import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { ownerContainer, notOwnerContainer } from '../data/Waiting.ducks'
import { Waiting } from '../../src/containers/Rooms/Waiting';
import WaitingScreen from '../../src/components/Rooms/Waiting';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

const mk = (notOwnerContainer) => shallow(
  <MemoryRouter
    initialEntries={['/waiting/1']}
    initialIndex={0}
  >
    <Waiting {...notOwnerContainer} />
  </MemoryRouter>,
);

describe('Waiting body', () => {
  it('should do some', () => {
    const ws = mk(notOwnerContainer).dive().dive();
    expect(ws.matchesElement(<Waiting {...notOwnerContainer} />), ws.debug()).to.be.true;
  });

  it('should do some', () => {
    const ws = mk(ownerContainer).dive().dive();
    expect(ws.matchesElement(<Waiting {...ownerContainer} />), ws.debug()).to.be.true;
  });

});
