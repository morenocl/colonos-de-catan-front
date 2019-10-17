import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Board } from '../src/containers/Board/Board';
import { hexagons } from '../src/utils/Data'


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

describe('Board', () => {
  it('should render without crashing', () => {
    const b = shallow(<Board hexagons={hexagons} />);
    expect(b.isEmptyRender(), b.debug()).to.be.false;
  });

  it('should be <div id="board">', () => {
    const b = shallow(<Board hexagons={hexagons} />);
    expect(b.equals(<div id="board" />), b.debug()).to.be.true;
  });
});
