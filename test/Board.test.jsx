import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Board from '../src/board/Board';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

describe('Board', () => {
  it('should render without crashing', () => {
    const b = shallow(<Board id={1} />);

    expect(b.isEmptyRender(), b.debug()).to.be.false;
  });

  it('should show an empty board to start with', () => {
    const b = shallow(<Board id={1} />);

    expect(b.children().isEmptyRender(), b.debug()).to.be.false;
  });

  it('should have <div id="board">', () => {
    const b = shallow(<Board id={1} />);

    expect(b.children().find('#board'), b.debug()).to.have.lengthOf(1);
  });
});
