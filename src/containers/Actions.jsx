import React from 'react';
import PropTypes from 'prop-types';


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
    return action.Costs.reduce((acc, c) => acc && counts[c.resource] >= c.value, true);
}

function Actions({ cards, resources }) {
    return (<ul>
    {possibleActions.map((action) => (
	<li color={is_available(resources, action) ? 'black' : 'grey'} >
	    {action.Name}
	</li>
    ))}
    </ul>);
}

Actions.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  resources: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Actions;
