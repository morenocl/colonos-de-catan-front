import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cost {
    constructor(resource, value) {
	this.resource = resource;
	this.value = value;
    }
}

const possibleActions = [
    {
	// Aparently I can't juse use a hashmap in js? at least SO tellms to make the keys myself, which sounds like a bad idea
	Name: "Buy development",
	Costs: [new Cost("ore", 1), new Cost("wool", 1), new Cost("grain", 1)],
    }
];

function is_available(resources, action) {
    var counts = {};
    for (var resource in resources) {
	if (resource in counts) {
	    counts[resource]++
	} else {
	    counts[resource] = 1
	}
    }
    return action.Costs.reduce((acc, c) => (acc && counts[c.resource] >= c.value), true);
}

function Actions({ cards, resources }) {
    return (
	<Container>
	<Row>
	{possibleActions.map((action) => (
	    <Col>
	    <Button
   	        variant="primary"
	        disabled={is_available(resources, action)}
	    />
	    </Col>
	))}
	</Row>
	</Container>
    );
}

Actions.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  resources: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Actions;
