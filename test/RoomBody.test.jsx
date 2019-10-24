import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Body } from '../src/containers/Rooms/Body';
import RoomBody from '../src/components/Rooms/Body';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

const room = {
  id: 1,
  name: 'name',
  owner: 'owner',
  players: ['player'],
  maxPlayers: 1,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const mk = () => shallow(<Body {...room} />);

describe('Room body', () => {
  it('should render without crashing', () => {
    const b = mk();
    expect(b.isEmptyRender(), b.debug()).to.be.false;
  });

  it('should render a body', () => {
    const b = mk();
    const {
      id, owner, players, maxPlayers,
    } = room;
    const expected = (
      <RoomBody
        id={id}
        loading={false}
        maxPlayers={maxPlayers}
        owner={owner}
        players={players.join(', ')}
      />
    );
    expect(b.matchesElement(expected), b.debug()).to.be.true;
  });
});
