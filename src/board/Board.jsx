import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SVG from 'svg.js';

import {
  WIDTH, HEIGHT, hexPath, center, colour,
} from './BoardUtils';
import { boardStatus } from '../utils/Api';
import Error from '../components/Error';


function drawBoard(hs) {
  const draw = SVG('board').size(WIDTH, HEIGHT);

  function drawHexagon(hexagon) {
    const { position, resource, token } = hexagon;
    const { level, index } = position;
    const { x, y } = center(level, index);

    draw.polygon(hexPath)
      .center(x, y)
      .rotate(90)
      .fill(colour(resource));

    draw.text(token)
      .center(x, y);
  }

  hs.forEach(drawHexagon);
}

export default function Board(props) {
  const { id } = props;
  const [error, setError] = useState(undefined);

  const showError = () => setError(<Error />);

  useEffect(() => boardStatus(id, drawBoard, showError), [id]);

  return (
    <div>
      {error}
      <div id="board" />
    </div>
  );
}


Board.propTypes = {
  id: PropTypes.number.isRequired,
};
