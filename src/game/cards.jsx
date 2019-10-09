import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { playerInfo } from '../utils/Api';

export default function Cards(props) {
    const { id } = props;
    const { resources, cards } = playerInfo(id, ()=>{}, ()=>{});


    const containerStyle = {
	listStyleType: 'none',
	display: 'inline',
    };

    const elementStyle = {
	display: 'inline',
    };
    
    return (
	<ul style={containerStyle}>
	{resources.map((x) => <li style={elementStyle}><Card type={x} /></li>)}
	{cards.map((x) => <li style={elementStyle}><Card type ={x} /></li>)}
	</ul>
  );
}

function Card(props) {
    const { type } = props;

    const cardStyle = {
	width: '50px',
	height: '100px',
	backgroundColor: getColor(type),
    };
  // Temporary
  return (
    <div style={cardStyle} ><b>{type}</b></div>
  );
}

function getColor(cardType) {
    switch (cardType) {
    case "brick":
	return '#eba434';
    case "lumber":
	return '#754b09';
    case "wool":
	return '#e3e3e3';
    case "grain":
	return '#ffed85';
    case "ore":
	return '#d6d6d6';
    case "road_building":
	return '#fffccf';
    case "year_of_plenty":
	return '#fff33d';
    case "monopoly":
	return '#ff82ea';
    case "victory_point":
	return '#ff2b56';
    case "knight":
	return '#322bff';
    default:
	return '#feafea';
    }
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
};

Cards.propTypes = {
    id: PropTypes.number.isRequired,
};