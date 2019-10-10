import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import LobbyList from '../src/lobbies/LobbyList';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

describe('LobbyList', () => {
  it('should render without crashing', () => {
    const l = shallow(<LobbyList />);
    expect(l.isEmptyRender(), l.debug()).to.be.false;
  });

  it('should show an empty list to start with', () => {
    const l = shallow(<LobbyList />);
    expect(l.children().isEmptyRender(), l.debug()).to.be.true;
  });
});
