import { expect, should } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';
import React from 'react';

import Card from 'react-bootstrap/Card';

import LobbyList from '../src/lobbies/LobbyList';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

describe('LobbyList', () => {
  it('should show an empty list to start with', function() {
    const l = shallow(<LobbyList />);
    expect(l.children().isEmptyRender(), l.debug()).to.equal(true);
  });
});
