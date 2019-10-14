import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Rooms } from '../src/containers/Rooms/Rooms';
import RoomsScreen from '../src/components/Rooms/Rooms';
import Error from '../src/components/Error';
import { initialState, errorState, runningState } from './data/Rooms.ducks';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

// eslint-disable-next-line react/jsx-props-no-spreading
const mk = (state) => shallow(<Rooms {...state} />);

describe('Rooms', () => {
  it('should render without crashing', () => {
    const r = mk(initialState);
    expect(r.isEmptyRender(), r.debug()).to.be.false;
  });

  it('should show an empty list to start with', () => {
    const r = mk(initialState);
    expect(r.equals(<></>), r.debug()).to.be.true;
  });

  it('should show an error', () => {
    const r = mk(errorState);
    expect(r.equals(<Error />), r.debug()).to.be.true;
  });

  it('should show two rooms', () => {
    const r = mk(runningState);
    const expected = <RoomsScreen rooms={runningState.rooms} />;
    expect(r.equals(expected), r.debug()).to.be.true;
  });
});
