import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Actions } from '../src/containers/Actions/Actions';
import ActionsScreen from '../src/components/Actions/Actions';
import Error from '../src/components/Error';
import { initialState, errorState } from './data/Actions.ducks';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

// eslint-disable-next-line react/jsx-props-no-spreading
const mk = (state) => shallow(<Actions {...state} />);

describe('Actions', () => {
  it('should render without crashing', () => {
    const r = mk(initialState);
    expect(r.isEmptyRender(), r.debug()).to.be.false;
  });

  it('should show the running screen', () => {
    const r = mk(initialState);
    expect(r.equals(<ActionsScreen />), r.debug()).to.be.true;
  });

  it('should show an error', () => {
    const r = mk(errorState);
    expect(r.containsMatchingElement(<Error />), r.debug()).to.be.true;
  });
});
