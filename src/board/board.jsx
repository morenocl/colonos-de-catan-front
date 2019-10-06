import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import SVG from 'svg.js';

import {
  WIDTH, HEIGHT, hexPath, center, colour,
} from './data';
import { boardStatus } from '../utils/api';


function drawBoard(hs) {
  const draw = SVG('board').size(WIDTH, HEIGHT);

  function drawHexagon(hexagon) {
    const { position, resource, token } = hexagon;
    const { level, index } = position;
    const { x, y } = center(level, index);

    draw.polygon(hexPath)
      .center(x, y)
      .fill(colour(resource));

    draw.text(token)
      .center(x, y);
  }

  hs.forEach(drawHexagon);
}

export default function Board(props) {
  const { id } = props;

  // Runs only after mounted for the first time.
  // Must use [] to mimic componentDidMount.
  // eslint-disable-next-line
  useEffect(() => boardStatus(id, drawBoard, console.log), []);

  return (
    <div id="board" />
  );
}


Board.propTypes = {
  id: PropTypes.number.isRequired,
};
