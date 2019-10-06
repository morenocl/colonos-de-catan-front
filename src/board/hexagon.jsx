import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import SVG from 'svg.js';

import {
  WIDTH, HEIGHT, hexPath, center,
} from './data';


export default function Hexagon(props) {
  const {
    level, index, resource, token,
  } = props;
  const id = `(${level},${index})`;

  // Draw SVG when component is mounted.
  useEffect(() => {
    const { x, y } = center(level, index);
    const draw = SVG(id).size(WIDTH, HEIGHT);

    draw.polygon(hexPath(x, y));
  });

  return (
    <div id={id}>
      <div>{`Posición: ${id}`}</div>
      <div>{`Resource: ${resource}`}</div>
      <div>{`Token: ${token}`}</div>
    </div>
  );
}


Hexagon.propTypes = {
  level: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  resource: PropTypes.string.isRequired,
  token: PropTypes.number.isRequired,
};
