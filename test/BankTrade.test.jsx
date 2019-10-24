import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import BankTrade from '../src/containers/bankTrade';
import BankTradeComponent from '../src/components/bankTradeComponent';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

// eslint-disable-next-line react/jsx-props-no-spreading
const mock = (state) => shallow(<BankTradeComponent {...state} />);

describe('BankTrade', () => {
    it('should render without crashing', () => {
	const r = mock(
	{
	    offerH: (_) => {},
	    requestH: (_) => {},
	    trader: (_) => {},
	    gives: 'wool',
	    takes: 'wool',
	}
	);
	expect(r.isEmptyRender(), r.debug()).to.be.false;
    });

    it('should block trade when both resources are unselected', () => {
	const r = mock(
	{
	    offerH: (_) => {},
	    requestH: (_) => {},
	    trader: (_) => {},
	    gives: '',
	    takes: '',
	}
	);
	expect(r.find('Button').filterWhere((item) => {
	    return item.prop('disabled') === true
	}), r.debug()).to.have.lengthOf(1);
    });

    it('should enable trade when both resources are selected', () => {
	const r = mock(
	{
	    offerH: (_) => {},
	    requestH: (_) => {},
	    trader: (_) => {},
	    gives: 'wool',
	    takes: 'lumber',
	}
	);
	expect(r.find('Button').filterWhere((item) => {
	    return item.prop('disabled') === false
	}), r.debug()).to.have.lengthOf(1);
    });

    it('should send the payload', () => {
	var success = false;
	const id = 1; // TODO get a valid id to the server that will work for the demo.

	const onSuccess = () => { success = true; };
	const onFailure = () => {};
	const _ = shallow(<BankTrade id={id} onSuccess={onSuccess} onFailure={onFailure} />);
	expect(success).to.equal(true);
    });

    it('should change the selected item accordingly', () => {
	var selected = false;
	const r = mock(
	{
	    offerH: (_) => { selected = true; },
	    requestH: (_) => {},
	    trader: (_) => {},
	    gives: '',
	    takes: '',
	}
	);
	let list = r.find('#offer');
	list.simulate('change', {target: {value: 'brick'}});
	expect(selected, r.debug()).to.equal(true);
    });
});