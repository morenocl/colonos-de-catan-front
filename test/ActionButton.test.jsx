import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { MemoryRouter } from 'react-router-dom';

import { ActionButton } from '../src/containers/Actions/ActionButton';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

const mk = (actions = [], component = Button, onClick = () => 'actionOnClick') => shallow(
  <MemoryRouter
    initialEntries={['/games/1']}
    initialIndex={0}
  >
    <ActionButton
      actions={actions}
      C={component}
      type="buy_card"
      actionOnClick={() => (() => onClick)}
    />
  </MemoryRouter>,
);

describe('ActionButton', () => {
  it('should render without crashing', () => {
    const r = mk();
    expect(r.children().isEmptyRender(), r.debug()).to.be.false;
  });

  it('should show one button', () => {
    const r = mk().find('ActionButton');
    expect(r, r.debug()).to.have.lengthOf(1);
  });
});
