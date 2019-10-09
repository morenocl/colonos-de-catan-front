import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { playerInfo } from '../utils/Api';

export default function Cards(props) {
  const { id } = props;
    const { resources, cards } = playerInfo(id, ()=>{}, ()=>{});

  return (
      <ul>
      {resources.map((x) => <li><Card type={x} /></li>)}
      {cards.map((x) => <li><Card type ={x} /></li>)}
      </ul>
  );
}

function Card(props) {
  const { type } = props;

  // Temporary
  return (
    <div><b>{type}</b></div>
  );
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
};

Cards.propTypes = {
    id: PropTypes.number.isRequired,
};