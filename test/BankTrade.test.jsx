import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import BankTrade from '../src/containers/bankTrade';
import BankTradeComponent from '../src/components/bankTradeComponent';
import Error from '../src/components/Error'; // maybe


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
	    takes: 'wool'
	}
	);
	expect(r.isEmptyRender(), r.debug()).to.be.false;
    });
});