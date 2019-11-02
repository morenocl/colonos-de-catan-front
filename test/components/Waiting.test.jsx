import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Waiting } from '../../src/components/Rooms/Waiting'
import { ownerState, notOwnerState } from '../data/Waiting.ducks'

// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

// eslint-disable-next-line react/jsx-props-no-spreading
const mk = (p) => shallow(<Waiting {...p} />);

describe('Waiting', () => {
  it('should be enable button', () => {
    const r = mk(ownerState);
    const button = (
      <Button disabled={false}>
        Cancel Room
      </Button>
    );
    expect(r.find('Button.cancel').matchesElement(button), r.debug()).to.be.true;
  });

  it('should be disable button', () => {
    const r = mk(notOwnerState);
    const button = (
      <Button disabled={true}>
        Cancel Room
      </Button>
    );
    expect(r.find('Button.cancel').matchesElement(button), r.debug()).to.be.true;
  });
});
